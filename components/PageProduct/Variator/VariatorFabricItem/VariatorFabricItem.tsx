import * as React from 'react';
import VariatorListName from "../VariatorListName";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {
  FabricAction,
  FabricAttribute, FabricImage,
  FabricInformation,
  FabricName,
  SCVariatorFabricItem
} from "./VariatorFabricItem.sc";
import {AModal} from "../../../../constants/actions";

const VariatorFabricItem = () => {

  const dispatch = useDispatch();

  const fabric = useSelector( (state: RootState) => state.product.fabric )

  const { image, collection, name } = fabric ? fabric : { image: false, collection: false, name: false};

  return (
    <SCVariatorFabricItem>
      <VariatorListName value={'Ткань'} />

      <FabricAttribute>
        <FabricImage
          image={(image) ? image : null}
          alt={collection + ' ' + name}
          title={collection + ' ' + name}
          onClick={() => {
            dispatch({
              type: AModal.OPEN,
              payload: {target: 'modalFabric'}
            })
          }}
        />
        <FabricInformation>
          <FabricName>{ fabric ? collection + ' ' + name : ''}</FabricName>
          <FabricAction
            onClick={() => {
              dispatch({
                type: AModal.OPEN,
                payload: {target: 'modalFabric'}
              })
            }}
          >
            {fabric ? 'Изменить' : 'Выбрать ткань'}
          </FabricAction>
        </FabricInformation>

      </FabricAttribute>
    </SCVariatorFabricItem>
  );
};


export default VariatorFabricItem;