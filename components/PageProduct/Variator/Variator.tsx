import React from 'react';
import VariatorColorList from "./VariatorColorList";
import VariatorFabricItem from "./VariatorFabricItem";
import VariatorList from "./VariatorList";
import {IAttribute, ISingleAttribute} from "../../../types/IProduct";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import styled from "styled-components";
import {Colors} from "../../../constants/colors";

const Variator = () => {

  const attributes: IAttribute[] = useSelector((state: RootState) => state.product.entity.variable_attributes.sort(
    (a, b) => a.taxonomy_position === b.taxonomy_position ? 0 : a.taxonomy_position < b.taxonomy_position ? -1 : 1
  ))
  const fabric = useSelector((state: RootState) => state.product.fabric)

  return (
    <VariatorWrapper>
      {attributes.map((parameters, index) => {
        const {taxonomy_slug} = parameters;

        if (taxonomy_slug === 'pa_color') {
          return <VariatorColorList
            key={index}
            parameters={parameters}
          />

        } else {
          return <VariatorList
            key={index}
            parameters={parameters}
          />
        }
      })}

      {fabric !== undefined ?
        <VariatorFabricItem/> : null
      }
    </VariatorWrapper>
  );
};


const VariatorWrapper = styled.div`
  @media (max-width: 768px){
    margin-top: 30px;
    border-top: 1px solid ${Colors.DIVIDER};
    padding-top: 30px;
  }
`

export default Variator;