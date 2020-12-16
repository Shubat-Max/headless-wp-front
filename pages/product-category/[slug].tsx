import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import {Colors} from "../../constants/colors";
import CatalogPage from "../../components/CatalogPage";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import initialActiveFilter from "../../__mocks__/initialActiveFliter"
import {catalog} from '../../__mocks__/catalog'
import {ACatalog} from "../../constants/actions";



const Catalog = ({catalog, slug}) => {
  let router = useRouter()
  const dispatch = useDispatch()

  // let perPage : number = useSelector((state:RootState) => state.catalog.perPage);
  // let page : number = useSelector((state:RootState) => state.catalog.page);
  // let sort : string = useSelector((state:RootState) => state.catalog.sort);
  // let filter : Filter = null


  // for (let queryItem in router.query) {
  //   switch (queryItem) {
  //     case 'filter':
  //       filter = JSON.parse(router.query[queryItem] as string )
  //       let temporaryAttrs = []
  //       if (filter.attributes) {
  //         for (let attr in filter.attributes ) {
  //           temporaryAttrs = [...temporaryAttrs, {taxonomy_slug: 'pa_' + attr, term_slug: filter.attributes[attr] } ]
  //         }
  //       }
  //       filter.attributes = temporaryAttrs
  //       break
  //     case 'perPage':
  //       perPage = Number(router.query[queryItem])
  //       break
  //     case 'page':
  //       page = Number(router.query[queryItem])
  //       break
  //     case 'sort':
  //       sort = router.query[queryItem] as string
  //       break
  //     default:
  //       break
  //   }
  // }
  //
  // for (let activeCategory in initialActiveFliter) {
  //   if (initialActiveFilter && initialActiveFilter[activeCategory]) {
  //     if (activeCategory === 'attributes') {
  //       initialActiveFilter[activeCategory].map(initAttr =>  {
  //         activeFil[activeCategory].find( attr => attr.taxonomy_slug === initAttr.taxonomy_slug).term_slug = initAttr.term_slug
  //       })
  //     } else {
  //       activeFil[activeCategory] = initialActiveFilter[activeCategory]
  //     }
  //   }
  // }

  dispatch({
    type: ACatalog.INIT,
    payload: {
      catalog,
      activeFilter: initialActiveFilter,
      page: 1,
      perPage: 16,
      sort: 'priceAsc'
    }
  })

  return (
    <SCCatalog>
      Страница каталога {slug}
      <CatalogPage />
    </SCCatalog>
  );
};

Catalog.getInitialProps = async ({query}) => {
  const { slug } = query;
  let data = await getCatalog(  );
  data = data.filter(item => !!item.default_variation_id)
  return { catalog: [...data], slug };
}

const getCatalog = async (  ) => {
  // return catalog
  const res = await fetch('http://130.193.62.149:8080/wp-json/rest/v3/catalog/product-test');
  return res.json();
}


const SCCatalog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
  & a {
    margin-top: 20px;
    cursor: pointer;
    color: ${Colors.PRIMARY};
    border-bottom: 1px dashed ${Colors.PRIMARY};
  }
`

export default Catalog;