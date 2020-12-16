import React from 'react';
import Link from "next/link";
import {DeliveryIcon, Hint, HintDescription, PaymentIcon, SCProductHints, WarrantyIcon} from "./ProductHints.sc";

const ProductHints = () => {
  return (
    <SCProductHints>
      <Hint><PaymentIcon /><HintDescription>Различные <Link href="/pay">способы оплаты</Link></HintDescription></Hint>
      <Hint><DeliveryIcon /><HintDescription><Link href="/dostavka">Расчитать стоимость</Link> доставки в {'<город>'}</HintDescription></Hint>
      <Hint><WarrantyIcon /><HintDescription><Link href="/warranty">Гарантия и возврат</Link></HintDescription></Hint>
    </SCProductHints>
  );
};



export default ProductHints;