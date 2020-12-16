import React from 'react';
import {Col, Row} from "../../Grid";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import Flickity from "react-flickity-component";
import ProductSetCard from "./ProductSetCard";
import ProductSetBaseCard from "./ProductSetBaseCard";
import {declineWord, formatPrice} from "../../../utils";
import {
  PlusSign,
  PriceDrop,
  SetBenefits,
  SetCounter,
  SetLabel,
  SetsContainer,
  SetSelector,
  Slider
} from "./ProductSets.sc";
import axios from "axios"


const flickityOptions = {
  prevNextButtons: true,
  pageDots: false,
  cellAlign: 'left',
}

const ProductSets = () => {

  return null;

  const id = useSelector((state:RootState) => state.product.entity?.id )

  const [sets, setSets] = React.useState(null);
  const [currentID, setCurrentID] = React.useState( null )

  React.useEffect(() => {
    if( currentID !== id )
      setSets(null)
  }, [currentID])

  if( sets === null ){
    axios.get(`http://130.193.62.187/wp-json/rest/v1/products/${id}/collection`).then((response) => {
      setCurrentID(id);
      const {status, data} = response;
      if( status === 200 ) setSets(data[0])
    }).catch((err) => {

    })
    return null;
  }

  if( Array.isArray(sets) && sets.length === 0 ) return null;

  return (
    <SetsContainer>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div>
            <SetLabel>Соберите комплект <SetCounter>{declineWord(sets.length, ['товар', 'товара', 'товаров'])}</SetCounter></SetLabel>
            <SetBenefits>Выгода за комплект: <PriceDrop>{formatPrice(12600)}</PriceDrop></SetBenefits>

            <SetSelector>

              <ProductSetBaseCard />

              <PlusSign />

              <Slider>
                <Flickity
                  className={'product-sets'}
                  elementType={'div'}
                  options={flickityOptions}
                  disableImagesLoaded={false}
                  reloadOnUpdate
                >
                  { sets.sort((a,b) => a.price <= b.price ? 1 : -1).map( (set, index) =>
                    <ProductSetCard
                      key={index}
                      {...{
                        name: set.name,
                        subtitle: set.subtitle,
                        image: set.image,
                        basePrice: set.price,
                        price: set.price
                      }}
                    />
                  )}
                </Flickity>
              </Slider>
            </SetSelector>
          </div>

        </Col>
      </Row>
    </SetsContainer>
  );
};



export default ProductSets;