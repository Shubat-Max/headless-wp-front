import * as React from "react"
import {FilterBlock, MobilaAccept, MobileBlock, MoBileButton, MobileClose, PriceFilter} from "./CatalogFilter.sc";
import Accordeon from "../Accordeon";
import AccordeonPrice from "../AccordeonPrice";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useEffect, useRef, useState} from "react";
import Sort from "../SortAndStock/Sort";
import {SortMobile} from "../SortAndStock/Sort/Sort.sc";
import CatalogPerPage from "../CatalogPerPage";
import {PerPageMobile} from "../CatalogPerPage/CatalogPerPage.sc";
import AccordeonCollection from "../AccordeonCollection";




const CatalogFilter = ({openFilter, setOpenFilter}) => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 1085)
  }, [])

  const attributes = useSelector((state:RootState) => state.catalog.initialFilter.attributeFilter)
  const ref = useRef(null);
  return <FilterBlock ref={ref} active={openFilter} onClick={(e) =>  {
    if (isMobile && ref.current === e.target) {
      setOpenFilter(!openFilter)
      document.body.className = ''
    }
  }}>
    <MoBileButton
      openFilter={openFilter}
      onClick={() => {
          console.log( document.body.style.top)
        setOpenFilter(!openFilter)
        document.body.className = ''
        window.scrollTo(0, 500)

      }}
    >
      <MobilaAccept />
      <MobileClose />
    </MoBileButton>

    <MobileBlock openFilter={openFilter}>
      {isMobile && <PerPageMobile><CatalogPerPage isMobile={true}/></PerPageMobile> }
      {isMobile && <SortMobile>Сортировка<Sort isMobile={true}/></SortMobile> }

      <PriceFilter>
        <AccordeonPrice/>
      </PriceFilter>

      <AccordeonCollection />

      {attributes.map( (filter, i) => {
        return <Accordeon filterItem={filter} key={filter.taxonomy_slug}/>
      })}
    </MobileBlock>
  </FilterBlock>
}



export default CatalogFilter