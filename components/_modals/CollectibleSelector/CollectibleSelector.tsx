import * as React from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {Container} from "../../Grid"
import useOutsideClicked from "../../_hooks/useOutsideClick"
import {
  Loader, ColRed, ModalClose, ModalHead, ModalTitle,  RowRed,
  SCCollectibleSelector, ScrollView, TransparentCover
} from "./CollectibleSelector.sc"
import axios from "axios"
import {APIUrl} from "../../../constants/api"
import {AModal, AModalCollection} from "../../../constants/actions"
import SimpleProductPolaroid from "../../_reusables/SimpleProductPolaroid"


const target = 'modalCollectibles'


const CollectibleSelector = () => {

  const dispatch = useDispatch();

  const ref = React.useRef(null)
  const [touched, setTouched] = React.useState(false)
  const [productId, setProductId] = React.useState(null)

  useOutsideClicked(ref, () => {
    dispatch({
      type: AModal.CLOSE,
      payload: {target}
    })
  })

  const {modalCollectibles, collection, collectibles, id} = useSelector((state: RootState) => ({
    modalCollectibles: state.modals.modalCollectibles,
    collectibles: state.modalCollectibles.entities[0]?.filter(entity => entity.id !== state.product.entity.id),
    collection: state.product.entity.collection,
    id: state.product.entity.id
  }));

  const {loading, loaded, shown} = modalCollectibles
  const {name, count} = collection


  if (!count) return null


  React.useEffect(() => {
    if (loading && shown) {

      if (!touched) setTouched(true)

      axios.get(`${APIUrl}/products/${id}/collection`)
        .then((response) => {

          const {status, data} = response;

          setProductId(id)
          if( status === 200 ){
            dispatch({
              type: AModalCollection.FETCH_SUCCESS,
              payload: {target, loaded: true, loading: false, data}
            })

          } else {
            dispatch({
              type: AModalCollection.FETCH_ERROR,
              payload: {target, loaded: false, loading: false}
            })
          }
        })
        .catch(() => {
          dispatch({
            type: AModalCollection.FETCH_ERROR,
            payload: {target, loaded: false, loading: false,}
          })
        })
    }
  }, [loading, shown, touched])


  return (
    <>
      <TransparentCover active={shown}/>
      <SCCollectibleSelector active={shown} touched={touched} ref={modalCollectibles ? ref : null} duration="0.2s">

        <ModalClose
          onClick={() => {
            if (shown) dispatch({type: AModal.CLOSE, payload: {target}})
          }}
        />

        <ModalHead>
          <ModalTitle>Коллекция {name}</ModalTitle>
        </ModalHead>

        {loading ? <Loader/> :
          loaded && collectibles ?
            <ScrollView>
              <Container>
                <RowRed>
                  {collectibles.map((c, i) => {

                      const {slug, image, name, subtitle, price} = c;

                      if (!slug) return null

                      return (
                        <ColRed xs={6} key={i}>
                          <SimpleProductPolaroid
                            data={{
                              image: image,
                              title: name,
                              subtitle: subtitle,
                              url: `/product/${slug}`,
                              price: price
                            }}
                            options={{
                              innerIndent: 10
                            }}
                          />
                        </ColRed>
                      )
                    }
                  )}
                </RowRed>
              </Container>
            </ScrollView> :
            <div>Retry</div>
        }

      </SCCollectibleSelector>
    </>
  );
};


export default CollectibleSelector;