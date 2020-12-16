import * as React from "react"

export function getRealPrice(item) {
  if (item.default_variation_id && item.variations[item.default_variation_id] && item.variations[item.default_variation_id].fabric) {
    return item.variations[item.default_variation_id].price * item.variations[item.default_variation_id].fabric.category.rate
  }
}

const getMinPrice = (item:{variations:{price:string}[]}):number => Object.values(item.variations).reduce((acc, v) => Number(v.price) < acc ? Number(v.price) : acc, Number.MAX_SAFE_INTEGER)
const getMaxPrice = (item:{variations:{price:string}[]}):number => Object.values(item.variations).reduce((acc, v) => Number(v.price) > acc ? Number(v.price) : acc, 0)


export function getFiltersData(catalog, initialActiveFilter) {
  let tempFilter: any = {
    collection: initialActiveFilter.collection,
    priceRange: initialActiveFilter.priceRange,
    // tabFilter: initialActiveFilter.tabFilter.map( attr => {
    //   return {taxonomy_slug: attr.taxonomy_slug, taxonomy_name: attr.taxonomy_name, values: [] };
    // }),
    attributeFilter: initialActiveFilter.attributeFilter.map(attr => {
      return {taxonomy_slug: attr.taxonomy_slug, taxonomy_name: attr.taxonomy_name, values: []};
    })
  }
  let minPrice = 0;
  let maxPrice = 0;


  catalog.length && catalog.map(item => {
    // собираем все статические атрибуты по категориям
    item.static_attributes.map(attr => {
      tempFilter.attributeFilter.map(activeAttr => {
        if (activeAttr.taxonomy_slug === attr.taxonomy_slug && !activeAttr.values.find(val => val.term_slug === attr.term_slug)) {
          activeAttr.values.push({term_slug: attr.term_slug, term_name: attr.term_name})
        }
      })
    })

    // все по аналогии с вариативными атрибутами
    if (item.variable_attributes && item.variable_attributes.length > 0) {
      item.variable_attributes.map(attr => {
        tempFilter.attributeFilter.map(activeAttr => {
          attr.taxonomy_options.map(opt => {
            if (activeAttr.taxonomy_slug === attr.taxonomy_slug && !activeAttr.values.find(val => val.term_slug === opt.term_slug)) {
              activeAttr.values.push({term_slug: opt.term_slug, term_name: opt.term_name})
            }
          })
        })
      })
    }

    // находим минимальную цену
    let itemMinPrice = getMinPrice(item)
    console.log('itemMinPrice', itemMinPrice);

    if (!minPrice || itemMinPrice < minPrice) {
      minPrice = itemMinPrice
    }

    // находим максимальную цену
    let itemMaxPrice = getMaxPrice(item)
    if (!maxPrice || itemMaxPrice > maxPrice) {
      maxPrice = itemMaxPrice
    }


    // находим коллекции, если есть
    if (item.collection) {
      if (!tempFilter.collection.includes(item.collection.name)) {
        tempFilter.collection = [...tempFilter.collection, item.collection.name]
      }
    }

    return item
  })

  tempFilter.priceRange = [Math.floor(minPrice / 500) * 500, Math.ceil(maxPrice / 500) * 500]
  initialActiveFilter.attributeFilter.map(actAtr => {
    if (actAtr.type === 'range') {
      let values = tempFilter.attributeFilter.find(atr => atr.taxonomy_slug === actAtr.taxonomy_slug).values
      values.map(val => {
        val.term_slug = Number(val.term_slug.split('-sm')[0])

        return val
      })
      values.sort((a, b) => {
        return a.term_slug - b.term_slug
      })
    }
    return actAtr
  })
  console.log(tempFilter)
  return tempFilter
}

export function filterItem(item, activeFilter) {
  let isset: boolean;
  let activeAttributes = activeFilter.attributeFilter.filter((attr) => attr.term_slug.length > 0)

  // если нет активных фильтров
  activeAttributes.length === 0
    // переходим к следующим проверкам.
    ? isset = true
    // иначе, проходимся по массиву фильтров и провереям наличие каждого фильтруемого аттрибута
    : activeAttributes.filter(attr => {
      // презумция виновности. Изначально мы хотим удлать товар, если не найдем нужный атррибут.
      let isFiltred = true

      if (attr.type === 'range') {

        isFiltred = !item.static_attributes.some(statAttr => {

          return statAttr.taxonomy_slug === attr.taxonomy_slug
            && Number(statAttr.term_slug.split('-sm')[0]) >= attr.term_slug[0]
            && Number(statAttr.term_slug.split('-sm')[0]) <= attr.term_slug[1]
        })

        isFiltred = !isFiltred
          ? false
          : !item.variable_attributes.some(varAttr =>
            varAttr.taxonomy_slug === attr.taxonomy_slug
            && varAttr.taxonomy_options.some(option =>
            Number(option.term_slug.split('-sm')[0]) >= attr.term_slug[0]
            && Number(option.term_slug.split('-sm')[0]) <= attr.term_slug[1]
            )
          )
      } else {
        //проходимся по массиву статических атриботов товара, если находим нужный товар, оставляем его, пока
        isFiltred = !item.static_attributes.some(statAttr => statAttr.taxonomy_slug === attr.taxonomy_slug && attr.term_slug.includes(statAttr.term_slug))

        //проходимся по массиву вариативным атриботов товара, если находим нужный товар, оставляем его, пока
        isFiltred = !isFiltred
          ? false
          : !item.variable_attributes.some(varAttr =>
            varAttr.taxonomy_slug === attr.taxonomy_slug && varAttr.taxonomy_options.some(option => attr.term_slug.includes(option.term_slug))
          )
        // отфильтрован ли товар
      }


      return isFiltred
    }).length === 0
    // если товар прошел проверку аттрибутов, переходим к следующим проверкам.
    ? isset = true
    // если не прошел отфильтровываем.
    : isset = false

  // проверка на активную коллекцию
  if (isset && activeFilter.collection.length) {
    isset = item.collection ? activeFilter.collection.includes(item.collection.name) : false
  }


  // проверка на диапозон цены
  if (isset) {
    isset = getMaxPrice(item) >= activeFilter.priceRange[0] && getMinPrice(item) <= activeFilter.priceRange[1]
  }

  return isset
}

export function setUrlStringFilter(activeFilter, initialActiveFilter) {
  let paramString = ''
  let activeAtributesParams = ''
  let activeCollectionParams = ''
  let activePriceParams = ''
  let activeAttributes = activeFilter.attributes.filter(attr => attr.term_slug.length > 0)
  if (activeAttributes.length) {
    activeAtributesParams = '"attributes":{';

    activeAttributes.map(attr => {
      activeAtributesParams += '"' + attr.taxonomy_slug.replace('pa_', '') + '":['
      attr.term_slug.forEach(slug => activeAtributesParams += '"' + slug + '",')
      activeAtributesParams = activeAtributesParams.slice(0, -1)
      activeAtributesParams += '],'
    })
    activeAtributesParams = activeAtributesParams.slice(0, -1)
    activeAtributesParams += '},'
  }

  // if (activeFilter.collection.length) {
  //   activeCollectionParams = '"collection":[';
  //   activeFilter.collection.forEach( collection => {
  //     activeCollectionParams += '"' + collection + '",'
  //   })
  //   activeCollectionParams = activeCollectionParams.slice(0, -1)
  //   activeCollectionParams += '],';
  //
  // }
  if (activeFilter.priceRange[0] !== initialActiveFilter.priceRange[0] || activeFilter.priceRange[1] !== initialActiveFilter.priceRange[1]) {
    activePriceParams = '"priceRange":[' + activeFilter.priceRange[0] + ',' + activeFilter.priceRange[1] + '],'
  }

  if (activeAtributesParams || activeCollectionParams || activePriceParams) {
    paramString += '&filter={' + activeAtributesParams + activeCollectionParams + activePriceParams
    paramString = paramString.slice(0, -1) + '}'
  }
  return paramString
}

export function sortBy(catalog, sortType) {
  switch (sortType) {
    case 'priceAsc':
      return catalog.sort(sortByPriceAsc)
    case 'priceDesc':
      return catalog.sort(sortByPriceDesc)
    case 'nameAsc':
      return catalog.sort(sortByName)
    case 'nameDesc':
      return catalog.sort(sortByName).reverse()
    default:
      return catalog
  }
}

function sortByPriceAsc(a, b) {
  return getRealPrice(a) - getRealPrice(b)
}

function sortByPriceDesc(a, b) {
  return getRealPrice(b) - getRealPrice(a)
}

function sortByName(a, b) {
  const nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();
  if (nameA < nameB)
    return -1
  if (nameA > nameB)
    return 1
  return 0
}



