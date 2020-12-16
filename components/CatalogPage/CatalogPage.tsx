import * as React from "react"
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {
  Container,
  Row,
} from "react-grid"
import Head from "next/head";
import {CatalogBlock, CatalogCol, CatalogItems, Heading} from "./CatalogPage.sc";
import VariableProductPolaroid from "../_reusables/VariableProductPolaroid";
import CatalogFilter from "./CatalogFilter";
import { useState} from "react";
import OneVariationProductPolaroid from "../_reusables/OneVariationProductPolaroid";
import SortAndStock from "./SortAndStock";
import CatalogPagination from "./CatalogPagination";
import styled from "styled-components";
import catalogForBackend from '../../__mocks__/catalogForBackend'
import CatalogTopFilter from "./CatalogTopFilter";




const styles = {
  breakpoints: { xs: 0, sm: 606, md: 828, lg: 1086, xl: 1500 },
  containerMaxWidths: { sm: 570, md: 798, lg: 1054, xl: 1470 },
  columns: 12,
  gutterWidth: 30
};

const CatalogPage = () => {
  const perPage = useSelector((state:RootState) => state.catalog.perPage);
  const page = useSelector((state:RootState) => state.catalog.page);
  const catalog = useSelector((state:RootState) => state.catalog.filtredCatalog);
  const activeAttrs = useSelector((state:RootState) => state.catalog.activeFilter.attributeFilter);
  const [openFilter, setOpenFilter] = useState(false)
  const catalogMAin = catalogForBackend

  // let memo = {};
  // let {initialFilter} = React.useMemo( () => getFiltersData(catalog, initialActiveFilter), [memo]) ;
  // initialActiveFilter = {...initialActiveFilter, priceRange: initialFilter.priceRange}

  // const [activeFilter, setActiveFilter] = useState(initialActiveFilter)
  // const [filter, setFilter] = useState(initialFilter)
  //
  // const [sortType, setSortType] = useState(initialSort ? initialSort : defaultSort)
  // const [filtredCatalog, setFiltredCatalog] = useState(sortBy(catalog.filter(item => filterItem(item, activeFilter) ), sortType ))
  //
  // const [page, setPage] = React.useState(initialPage ? initialPage : defaultPage);
  // const [perPage, setPerPage] = React.useState(initialPerPage ? initialPerPage : defaultPerPage);

  // const router = useRouter()
  // React.useEffect( () => {
  //   let newCatalog = sortBy(catalog.filter(item => filterItem(item, activeFilter) ), sortType )
  //   setFiltredCatalog(newCatalog)
  //   setFilter(getFiltersData(newCatalog, initialActiveFilter).initialFilter)
  //   // setPage(1)
  // }, [activeFilter, sortType])

  // useEffect( () => {
  //   let paramString = setUrlStringFilter(activeFilter, activeFil)
  //
  //   if (sortType !== defaultSort) {
  //     paramString += '&sort=' + sortType
  //   }
  //
  //   if (page !== defaultPage) {
  //     paramString += '&page=' + page
  //   }
  //
  //   if (perPage !== defaultPerPage) {
  //     paramString += '&perPage=' + perPage
  //   }
  //
  //   router.push(
  //     '',
  //     '/product-category/sofas' + paramString.replace('&', '?'),
  //     { shallow: true }
  //   )
  // }, [activeFilter, sortType, page, perPage])

  return (
    <>
      <Head>
        <title>catalog/ТОвары</title>
      </Head>

      <Container styles={styles}>
        <Row styles={styles}>
          <Heading xs={12} styles={styles}>
            {catalogMAin.name}
          </Heading>
        </Row>

        <CatalogTopFilter
                subcategories={catalogMAin.subcategory}
                // activeFilter={activeFilter}
                // setActiveFilter={setActiveFilter}
                // initialFilter={initialFilter.tabFilter.filter(cat => cat.values.length > 1)}
                // filters={filter.tabFilter}
        />

        <CatalogBlock >
          <CatalogFilter openFilter={openFilter} setOpenFilter={setOpenFilter}/>
          <CatalogItems>
            <SortAndStock openFilter={openFilter} setOpenFilter={setOpenFilter}/>
            <Row>
              {catalog.slice(perPage * (page - 1), perPage * page).map( (p, i) => {
                return (
                        <CatalogCol key={p.id}   xs={6} xl={4} styles={styles}>
                          {
                            Object.keys(p.variations).length === 1
                                    ? <OneVariationProductPolaroid item={p} key={p.id} />
                                    : <VariableProductPolaroid item={p} activeAttributes={activeAttrs} key={p.id} />
                          }
                        </CatalogCol>
                )
              })}
            </Row>
            <CatalogPagination catalogLength={catalog.length}/>
          </CatalogItems>

        </CatalogBlock>

        <SMS />
        <ForFixedItems >

              <Background />

        </ForFixedItems>
      </Container>
    </>
  )
};

export const SMS = styled.div`
  position: fixed;
  bottom: 50px;
  left: 15px;
  width: 50px;
  height: 50px;
  background: #0086A8;
  border-radius: 50px;
  z-index: 50;

  
 
`

export const ForFixedItems = styled.div`
  position: fixed;
  bottom: 50px;
  height: 50px;
  width: 100%;
  left: 0;
  display: none;
  z-index: 49;
 
  @media(max-width: 570px) {
    display: block;
  }
`

export const Background = styled(Container)`
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0.8);
  padding: 0;
`

export default CatalogPage;