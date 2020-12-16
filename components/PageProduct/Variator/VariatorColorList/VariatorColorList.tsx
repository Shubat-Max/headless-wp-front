import React from 'react';

import VariatorColorItem from "../VariatorColorItem";
import VariatorListName from "../VariatorListName";
import {SCVariatorColorList} from './VariatorColorList.sc';
import {IAttribute} from "../../../../types/IProduct";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {getMatchVariation} from "../../../../utils";


const VariatorColorList = ({parameters}: { parameters: IAttribute; }): JSX.Element => {

  const {taxonomy_name, taxonomy_slug, taxonomy_options} = parameters;


  const {variator, entity: {variations}} = useSelector((state: RootState) => state.product)

  /* "First match is OK" algorithm */

  // const tax_opt_with_fabric = taxonomy_options.map((tax_opt) => {
  //   const matchVariation:any = Object.values(variations).find((variation: any) => {
  //     const found = variation.variation_attributes.reduce((acc, var_attr) => {
  //       if (acc) return acc;
  //
  //       if (var_attr.taxonomy_slug === taxonomy_slug)
  //         if (var_attr.term_slug === tax_opt.term_slug)
  //           acc = true
  //
  //       return acc;
  //     }, false)
  //
  //     if (found) return true
  //   })
  //
  //   return {
  //     ...tax_opt,
  //     image: matchVariation.fabric.image
  //   }
  // })

  const tax_opt_with_fabric = taxonomy_options.map((tax_opt) => {
    const options = variator.map((opt) => opt.taxonomy_slug === taxonomy_slug ? {...opt, ...tax_opt} : opt)
    const matchVariation = getMatchVariation(variations, options)

    if( ! matchVariation ) return tax_opt

    return {
      ...tax_opt,
      image: matchVariation.fabric.image
    }
  })

  // console.log('getMatchVariation', getMatchVariation(variations, variator));


  return (
    <SCVariatorColorList>

      <VariatorListName value={taxonomy_name}/>

      {tax_opt_with_fabric.map((option, index) =>
        <VariatorColorItem
          term={option}
          taxonomy={taxonomy_slug}
          key={index}
        />
      )}
    </SCVariatorColorList>
  );
};

export default VariatorColorList;