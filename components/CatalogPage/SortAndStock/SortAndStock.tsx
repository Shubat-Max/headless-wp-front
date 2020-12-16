import * as React from "react"
import {ActiveFilterBLock, ActiveFilterClose, CallFilterMobile, SortAndStockBlock} from "./SortAndStock.sc";
import Stock from "./Stock";
import Sort from "./Sort";
import ActiveFilterItem from "./ActiveFilterItem";
import {formatPrice} from "../../../utils";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ACatalog} from "../../../constants/actions";
import {useState} from "react";




const SortAndStock = ({openFilter, setOpenFilter}) => {
  const activeFilter = useSelector((state:RootState) => state.catalog.activeFilter);
  const initialFilter = useSelector((state:RootState) => state.catalog.initialFilter);
  const dispatch = useDispatch()

  let showPrice = (activeFilter.priceRange[0] !==  initialFilter.priceRange[0] || activeFilter.priceRange[1] !==  initialFilter.priceRange[1])
  let count = showPrice ? 1 : 0
  return (
   <>
    <SortAndStockBlock>
      <Stock />
      <Sort isMobile={false} />
      <CallFilterMobile
              active={openFilter}
              onClick={() => {
                setOpenFilter(!openFilter)
                let top = -window.pageYOffset
                !openFilter ? document.body.className = 'fixed' : document.body.className = ''
                // @ts-ignore
                document.querySelector('.fixed').style.top = top + 'px'
              }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#353238" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3333 12.6667H13.558C13.2693 11.706 12.3867 11 11.3333 11C10.28 11 9.398 11.706 9.10869 12.6667H0.666656C0.298656 12.6667 0 12.9653 0 13.3333C0 13.7013 0.298656 14 0.666656 14H9.10866C9.39731 14.9607 10.28 15.6667 11.3333 15.6667C12.3866 15.6667 13.2687 14.9607 13.558 14H15.3333C15.702 14 16 13.7013 16 13.3333C16 12.9653 15.702 12.6667 15.3333 12.6667ZM11.3333 14.3333C10.782 14.3333 10.3333 13.8847 10.3333 13.3333C10.3333 12.782 10.782 12.3333 11.3333 12.3333C11.8847 12.3333 12.3333 12.782 12.3333 13.3333C12.3333 13.8847 11.8847 14.3333 11.3333 14.3333Z" />
          <path d="M15.3333 2.00001H13.558C13.2687 1.03935 12.3867 0.333351 11.3333 0.333351C10.28 0.333351 9.398 1.03935 9.10866 2.00001H0.666656C0.298656 2.00001 0 2.29866 0 2.66666C0 3.03466 0.298656 3.33332 0.666656 3.33332H9.10866C9.398 4.29401 10.28 5.00001 11.3333 5.00001C12.3867 5.00001 13.2687 4.29401 13.558 3.33335H15.3333C15.702 3.33335 16 3.03469 16 2.66669C16 2.29869 15.702 2.00001 15.3333 2.00001ZM11.3333 3.66666C10.782 3.66666 10.3333 3.21801 10.3333 2.66666C10.3333 2.11532 10.782 1.66666 11.3333 1.66666C11.8847 1.66666 12.3333 2.11532 12.3333 2.66666C12.3333 3.21801 11.8847 3.66666 11.3333 3.66666Z" />
          <path d="M15.3333 7.33336H6.89134C6.602 6.3727 5.72 5.6667 4.66669 5.6667C3.61337 5.6667 2.73134 6.3727 2.44203 7.33336H0.666656C0.298656 7.33336 0 7.63202 0 8.00002C0 8.36802 0.298656 8.66668 0.666656 8.66668H2.442C2.73134 9.62734 3.61334 10.3333 4.66666 10.3333C5.71997 10.3333 6.602 9.62734 6.89131 8.66668H15.3333C15.702 8.66668 16 8.36802 16 8.00002C16 7.63202 15.702 7.33336 15.3333 7.33336ZM4.66666 9.00003C4.11531 9.00003 3.66666 8.55137 3.66666 8.00002C3.66666 7.44868 4.11531 7.00002 4.66666 7.00002C5.218 7.00002 5.66666 7.44868 5.66666 8.00002C5.66666 8.55137 5.218 9.00003 4.66666 9.00003Z" />
        </svg>
      </CallFilterMobile>
    </SortAndStockBlock>
     {( activeFilter.attributeFilter.find(attr => attr.term_slug.length) || showPrice) && <ActiveFilterBLock>
       {activeFilter.attributeFilter.map(attr => {
         if (attr.term_slug.length) {
           let initAttr = initialFilter.attributeFilter.find(initAttr =>  attr.taxonomy_slug === initAttr.taxonomy_slug)

           if (attr.type === 'range') {
             return <ActiveFilterItem
               key={attr.term_slug}
               close={() =>
                       dispatch({
                         type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE,
                         payload: {
                           value: [],
                           slug: attr.taxonomy_slug,
                         }
                       })
               }
               value={attr.term_slug[0] + ' - ' + attr.term_slug[1] + ' см'}
             />
           }

           return attr.term_slug.map( val => {
             count++
             return <ActiveFilterItem
                     key={attr.term_slug}
                     close={() =>
                       dispatch({
                         type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES,
                         payload: {
                           value: {term_slug: val},
                           slug: attr.taxonomy_slug,
                         }
                       })
                     }
                     value={initAttr.values.find(initVal => initVal.term_slug === val).term_name}
             />
           })
         }
       })}
       {showPrice && <ActiveFilterItem
         close={() => dispatch({
           type: ACatalog.CHANGE_PRICE,
           payload: {
             priceRange: initialFilter.priceRange
           }
         })}
         value={`${activeFilter.priceRange[0]} - ${formatPrice(activeFilter.priceRange[1])}`}
       /> }

       {count
               ? <ActiveFilterClose
                       onClick={() => dispatch({
                         type: ACatalog.CLEAR_ACTIVE_FILTER,
                       })}
               >
                 Сбросить фильтры ({count})
               </ActiveFilterClose>
               : null
       }
     </ActiveFilterBLock>
     }

   </>
 )
}



export default SortAndStock