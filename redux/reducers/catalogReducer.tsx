import {ACatalog} from "../../constants/actions";
import {filterItem, getFiltersData, sortBy} from "../../components/CatalogPage/CatalogPageFunctions";
import {log} from "util";

interface IInitialState {
  initialCatalog: Array<any>,
  filtredCatalog: [],
  initialFilter: {
    attributeFilter: any;
    priceRange: [number, number]
  },
  filtredFilter: {
    collection: Array<any> ;
    attributeFilter: any;
  },
  activeFilter: {
    collection: Array<string>;
    tabFilter: Array<any>;
    attributeFilter: any;
  },
  lastClickedCategory: {name: '', data: []},
  perPage: number,
  page: number,
  sort: string,
}


const  initialState : IInitialState = {
  initialCatalog: [],
  filtredCatalog: [],
  initialFilter: {
    attributeFilter: [],
    priceRange: [0, 0]
  },
  filtredFilter: {
    collection: [],
    attributeFilter: []
  },
  activeFilter: {
    collection: [],
    attributeFilter: {},
    tabFilter: []
  },
  lastClickedCategory: {name: '', data: []},
  perPage: 4,
  page: 1,
  sort: 'priceAsc',
}

const catalogReducer = ( state = initialState, action ) => {
  switch( action.type ){
    case ACatalog.INIT: {
      let tempFilter = getFiltersData(action.payload.catalog, action.payload.activeFilter)
      const  activeFilter = {...action.payload.activeFilter, priceRange:  tempFilter.priceRange}
      return {
        ...state,
        initialCatalog: action.payload.catalog,
        activeFilter,
        initialFilter: tempFilter,
        filtredFilter: tempFilter,
        filtredCatalog: sortBy(action.payload.catalog.filter(item => filterItem(item, activeFilter) ), state.sort ),
        page: action.payload.page,
        perPage: action.payload.perPage,
        sort: action.payload.sort
      }
    }
    case ACatalog.CHANGE_PRICE: {
      const activeFilter =  {...state.activeFilter, priceRange: action.payload.priceRange}
      return {
        ...state,
        activeFilter,
        filtredCatalog: sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort ),
        filtredFilter: getFiltersData(state.initialCatalog, activeFilter),
        lastClickedCategory: {
          name: '',
          data: []
        },
      }
    }
    case ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES: {
      let isDeleteActiveAttr = false;
      const activeFilter = {
        ...state.activeFilter,
        // проходимся по массиву активных атрибутов
        attributeFilter: state.activeFilter.attributeFilter.map(attr => {
          // если совпадает с нашим атрибутом
          if (attr.taxonomy_slug === action.payload.slug) {
            isDeleteActiveAttr = action.payload.value && attr.term_slug.includes(action.payload.value.term_slug)
            // меняем значение активного атрибута, если это активное значение
            attr.term_slug = action.payload.value
                    // если оно уже имеется в активных, удалеям его иначе добавляем
                    ? attr.term_slug.includes(action.payload.value.term_slug)
                            ? attr.term_slug.filter(val => val !== action.payload.value.term_slug)
                            : [...attr.term_slug, action.payload.value.term_slug]
                    // сброс значений
                    : []
          }
          return attr
        })
      }
      let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )

      return {
        ...state,
        activeFilter,
        filtredCatalog,
        filtredFilter: getFiltersData(filtredCatalog, activeFilter),
        lastClickedCategory: state.filtredFilter.attributeFilter
          .find(attr => attr.taxonomy_slug === action.payload.slug).taxonomy_slug === state.lastClickedCategory.name || isDeleteActiveAttr
            ? state.lastClickedCategory
            : {
              name: action.payload.slug,
              data: state.filtredFilter.attributeFilter.find(attr => attr.taxonomy_slug === action.payload.slug).values
            },
      }
    }
    case ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE: {
      const activeFilter = {
      ...state.activeFilter,
                // проходимся по массиву активных атрибутов
          attributeFilter: state.activeFilter.attributeFilter.map(attr => {
            // если совпадает с нашим атрибутом
            if (attr.taxonomy_slug === action.payload.slug) {
              //если знчение ренджа равно изначальному, сбрасываем фильтр
              let initialState = state.initialFilter.attributeFilter.find(attr => attr.taxonomy_slug === action.payload.slug).values
              console.log(initialState)
              initialState[0].term_slug === action.payload.value[0] && initialState[initialState.length - 1].term_slug === action.payload.value[1]
                ? attr.term_slug = []
                // меняем значение активного атрибута, если это активное значение
                : attr.term_slug = action.payload.value
            }
          return attr
        })
      }
      let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )

      return {
        ...state,
        activeFilter,
        filtredCatalog,
        filtredFilter: getFiltersData(filtredCatalog, activeFilter),
        lastClickedCategory: {
          name: action.payload.slug,
          data: state.filtredFilter.attributeFilter.find(attr => attr.taxonomy_slug === action.payload.slug).values
        },
      }
    }
    case ACatalog.CHANGE_ACTIVE_FILTER_COLLECTION: {
      const activeFilter = {
        ...state.activeFilter,
        collection: state.activeFilter.collection.includes(action.payload.value)
                ? state.activeFilter.collection.filter( col => col !== action.payload.value)
                : [...state.activeFilter.collection, action.payload.value]
      }
      let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )

      return {
        ...state,
        activeFilter,
        filtredCatalog,
        filtredFilter: getFiltersData(filtredCatalog, activeFilter),
        lastClickedCategory: {
          name: 'collection',
          data: state.filtredFilter.collection
        },
      }
    }

    case ACatalog.CLEAR_ACTIVE_FILTER: {
      const activeFilter = {
        attributeFilter: state.activeFilter.attributeFilter.map(attr => { return {...attr, term_slug: []} }),
        priceRange: state.initialFilter.priceRange,
        collection: [],
      }
      return {
        ...state,
        activeFilter,
        filtredCatalog: sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort ),
        filtredFilter: getFiltersData(state.initialCatalog, activeFilter),
        lastClickedCategory: {
          name: '',
          data: []
        },
      }
    }
    case ACatalog.CHANGE_SORT_TYPE: {
      return {
        ...state,
        sort: action.payload.sort,
        filtredCatalog: [...sortBy(state.filtredCatalog, action.payload.sort )]
      }
    }
    case ACatalog.CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload.page
      }
    }
    case ACatalog.CHANGE_PER_PAGE: {
      return {
        ...state,
        perPage: action.payload.perPage
      }
    }
    default:
      return state
  }
}

export default catalogReducer;