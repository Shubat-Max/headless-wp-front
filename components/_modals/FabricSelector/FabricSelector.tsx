import * as React from "react"
import styled, {keyframes} from "styled-components"

import {Colors} from "../../../constants/colors"
import FabricFilter from "./FabricFilter"
import FabricList from "./FabricList"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from '../../../redux/store'
import useOutsideClicked from "../../_hooks/useOutsideClick"
import {debounce} from "../../../utils"
import axios from "axios"
import {APIUrl} from "../../../constants/api";
import {AModal, AModalFabric} from "../../../constants/actions";
import BaseAnimation from "../../BaseAnimation";
import FabricProgress from "./FabricProgress";
import {
  DropdownArrow,
  FabricFilterSwitch,
  ModalClose, ModalFilter,
  ModalHead,
  ModalTitle,
  ModalWindow,
  TransparentCover,
  Loader, ScrollView, Retry, RetryNotification, RetryAction
} from "./FabricSelector.sc";


const target = 'modalFabric';

const FabricSelector = () => {

  const dispatch = useDispatch();

  const ref = React.useRef(null);
  const scrollRef = React.useRef(null);
  const [touched, setTouched] = React.useState(false)
  const [filterTouched, setFilterTouched] = React.useState(false)

  useOutsideClicked(ref, () => {
    dispatch({
      type: AModal.CLOSE,
      payload: {target}
    })
  });

  const [filterActive, setFilterActive] = React.useState(false);
  // const [progress, setProgress] = React.useState(0)

  const modalFabric = useSelector((state: RootState) => state.modals.modalFabric);
  const {loading, loaded, shown} = modalFabric;

  React.useEffect(() => {
    if (loading && shown) {
      if (!touched) setTouched(true)

      axios.get(`${APIUrl}/fabrics`)
        .then((response) => {
          const {status, data} = response;

          status === 200 ?
            dispatch({
              type: AModalFabric.FETCH_SUCCESS,
              payload: {target, loaded: true, loading: false, data}
            }) :
            dispatch({
              type: AModalFabric.FETCH_ERROR,
              payload: {target, loaded: false, loading: false,}
            })
        })
        .catch(() => {
          dispatch({
            type: AModalFabric.FETCH_ERROR,
            payload: {target, loaded: false, loading: false,}
          })
        })
    }
  }, [loading, shown, touched])


  // React.useEffect(() => {
  //   scrollRef.current !== null ?
  //     scrollRef.current.addEventListener('scroll', (e) => {
  //       updateProgressBar(e)
  //     }) : null
  // })
  //
  // const updateProgressBar = debounce((e) => {
  //   // let blockHeight = e.target.offsetHeight;
  //   let blockHeight = e.target.scrollHeight ;
  //   let scrollHeight = e.target.scrollTop;
  //   let wih = window.innerHeight;
  //   let val = ((100 * scrollHeight) / blockHeight);
  //
  //   console.log( 'bh', blockHeight )
  //   console.log('wih', wih )
  //   console.log( val )
  //   console.log('sh', scrollHeight )
  //
  //   // console.log(val);
  //   setProgress(val)
  // }, 1)

  // const progressRef = React.createRef();

  return (
    <>
      <TransparentCover active={shown}/>
      <ModalWindow active={shown} touched={touched} ref={modalFabric ? ref : null} duration="0.2s">
        <ModalClose
          onClick={() => {
            if (shown) dispatch({
              type: AModal.CLOSE,
              payload: {target}
            })
          }}
        />

        {/*<Progress scroll={progress + '%'}/>*/}
        {/*<FabricProgress ref={progressRef}/>*/}

        <ModalHead>
          <ModalTitle>Выбрать ткань</ModalTitle>
          <FabricFilterSwitch onClick={() => {
            setFilterActive(a => !a)
            if (!filterTouched) setFilterTouched(true)
          }}>
            {filterActive ? 'Свернуть фильтр' : 'Развернуть фильтр'}
            <DropdownArrow active={filterActive}/>
          </FabricFilterSwitch>
        </ModalHead>

        {loading ? <Loader/> :

          loaded ?
            <>
              <ModalFilter active={filterActive} touched={filterTouched} duration="0.2s">
                <FabricFilter/>
              </ModalFilter>
              <ScrollView ref={scrollRef}>
                <FabricList/>
              </ScrollView>
            </> :

            <Retry>
              <RetryNotification>
                Извините милорд! Мы не смогли найти ваши ткани...
              </RetryNotification>
              <RetryAction
                onClick={() => {
                  dispatch({
                    type: AModalFabric.FETCH_RETRY,
                    payload: {target, loaded: false, loading: true,}
                  })
                }}
              >
                Попробовать еще раз
              </RetryAction>
            </Retry>
        }
      </ModalWindow>
    </>
  );
};


export default FabricSelector;