import * as React from "react"
import {useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {Heading, SCProductFit, Body, Card} from "./ProductFit.sc"
import {mockProduct} from "../../../__mocks__/solidVProduct"
import SimpleProductPolaroid from "../../_reusables/SimpleProductPolaroid"
import Flickity from "react-flickity-component";
import ReactFlickity from "../../_reusables/ReactFlickity";


const flickityOptions = {
  prevNextButtons: true,
  pageDots: true,
  groupCells: true,
  cellAlign: 'left',
  contain: true,
}


const ProductFit = () => {

  const fits = useSelector((state: RootState) => state.product.entity.fit)

  if (!fits || fits.length === 0) return null

  return (
    <SCProductFit>
      <Heading>Аксессуары и удачные дополнения</Heading>
      <Body>
        <ReactFlickity
          settings={{
            className: 'product-fit',
            elementType: 'div',
            disableImagesLoaded: false,
            prevNextButtons: true,
            pageDots: true,
            pageCounter: true,
            options: {
              cellAlign: 'left',
              contain: true,
            }
          }}
        >
          {fits.map((f, i) => {

            const {name, image, subtitle, slug, price} = f;

            if (!name || !image || !slug || !price) return null;

            return (
              <Card key={i}>
                <SimpleProductPolaroid
                  key={i}
                  data={{
                    url: `/product/${slug}`,
                    image: image,
                    title: name,
                    subtitle: subtitle,
                    price: price,
                  }}
                />
              </Card>
            )
          })}
        </ReactFlickity>
      </Body>
    </SCProductFit>
  )
}


export default ProductFit