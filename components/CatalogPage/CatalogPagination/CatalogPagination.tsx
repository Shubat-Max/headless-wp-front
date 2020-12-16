import * as React from "react"
import ReactPaginate from 'react-paginate';
import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import CatalogPerPage from "../CatalogPerPage";
import {CatalogPaginationLine, ReactCatalogPagination} from "./CatalogPagination.sc";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ACatalog} from "../../../constants/actions";


const CatalogPagination = ({catalogLength}) => {
  const dispatch = useDispatch()
  const perPage = useSelector((state:RootState) => state.catalog.perPage);
  const page = useSelector((state:RootState) => state.catalog.page);

  // function changePage(data) {
  //   setPage(data.selected + 1)
  // }


  return (
    <CatalogPaginationLine>
      <ReactCatalogPagination pageInfo={`${page} из ${Math.ceil(catalogLength / perPage)}`}>
        <ReactPaginate
                /* documentation https://www.npmjs.com/package/react-paginate*/
                previousLabel={
                  <svg fill="#353238" width="11" height="12" viewBox="0 0 11 12"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4693 5.55762H0.442369C0.198046 5.55762 0 5.7558 0 5.99999C0 6.24419 0.198024 6.44237 0.442369 6.44237H10.4693C10.7136 6.44237 10.9117 6.24434 10.9117 5.99999C10.9117 5.75564 10.7137 5.55762 10.4693 5.55762Z"/>
                    <path d="M10.8703 5.68711L6.53527 1.35192C6.36245 1.17924 6.08259 1.17924 5.90977 1.35192C5.73695 1.52474 5.73695 1.8049 5.90977 1.97757L9.93205 5.99999L5.90977 10.0224C5.73695 10.1951 5.73695 10.4753 5.90977 10.6479C5.99618 10.7344 6.10928 10.7776 6.22252 10.7776C6.33577 10.7776 6.44886 10.7344 6.53527 10.6479L10.8703 6.31277C11.0431 6.13994 11.0431 5.85976 10.8703 5.68711Z"/>
                  </svg>}
                nextLabel={
                  <svg fill="#353238" width="11" height="12" viewBox="0 0 11 12"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4693 5.55762H0.442369C0.198046 5.55762 0 5.7558 0 5.99999C0 6.24419 0.198024 6.44237 0.442369 6.44237H10.4693C10.7136 6.44237 10.9117 6.24434 10.9117 5.99999C10.9117 5.75564 10.7137 5.55762 10.4693 5.55762Z" />
                    <path d="M10.8703 5.68711L6.53527 1.35192C6.36245 1.17924 6.08259 1.17924 5.90977 1.35192C5.73695 1.52474 5.73695 1.8049 5.90977 1.97757L9.93205 5.99999L5.90977 10.0224C5.73695 10.1951 5.73695 10.4753 5.90977 10.6479C5.99618 10.7344 6.10928 10.7776 6.22252 10.7776C6.33577 10.7776 6.44886 10.7344 6.53527 10.6479L10.8703 6.31277C11.0431 6.13994 11.0431 5.85976 10.8703 5.68711Z" />
                  </svg>}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(catalogLength / perPage) }
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={(data) =>  dispatch({
                  type: ACatalog.CHANGE_PAGE,
                  payload: {
                    page: data.selected + 1
                  }
                })}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}

        />
      </ReactCatalogPagination>

      <CatalogPerPage isMobile={false}/>
    </CatalogPaginationLine>

)}


export default CatalogPagination