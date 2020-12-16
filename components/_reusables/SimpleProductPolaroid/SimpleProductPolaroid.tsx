import * as React from "react"
import {formatPrice, formatSubtitle} from "../../../utils"
import Link from "next/link"
import {
  PolaroidCard, Snapshot, SnapshotInner, SnapshotOuter, SnapshotPrice, SnapshotPrices,
  SnapshotRegularPrice, SnapshotSubtitle, SnapshotTitle
} from "./SimpleProductPolaroid.sc"


interface ISimpleProductPolaroid {
  data: {
    image: string;
    title: string;
    subtitle: string | string[];
    url?: string;
    price: number;
    regularPrice?: number;
  };
  options?: {
    innerIndent?: number;
  };
}


const defaultOptions = {
  innerIndent: 15,
}


const SimpleProductPolaroid = ({data, options}: ISimpleProductPolaroid) => {

  const assembledOptions = {...defaultOptions, ...options}
  const {image, title, subtitle, url, price, regularPrice} = data

  if( !image || !title || !price ) return null;

  return (
    <PolaroidCard innerIndent={assembledOptions.innerIndent}>
      <Link href={url ? url : '/'} passHref>
        <a>
          <SnapshotOuter>
            <SnapshotInner title={title}>
              <Snapshot src={image} alt={title}/>
            </SnapshotInner>
          </SnapshotOuter>

          <SnapshotTitle>{title}</SnapshotTitle>
          <SnapshotSubtitle>{subtitle ? formatSubtitle(subtitle) : null}</SnapshotSubtitle>

          <SnapshotPrices>
            <SnapshotPrice>{formatPrice(price)}</SnapshotPrice>
            {regularPrice ? <SnapshotRegularPrice>{formatPrice(regularPrice)}</SnapshotRegularPrice> : null}
          </SnapshotPrices>
        </a>
      </Link>
    </PolaroidCard>
  )
}


export default SimpleProductPolaroid;