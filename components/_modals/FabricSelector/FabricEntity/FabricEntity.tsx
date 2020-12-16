import React from "react"
import styled from "styled-components"
import {Colors} from "../../../../constants/colors"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../../redux/store"
import {AModal, AVariator} from "../../../../constants/actions"
import {Fabric, FabricImage, FabricTitle, SCFabricEntity} from "./FabricEntity.sc";

const FabricEntity = ({fabric, collection, category}) => {

  const dispatch = useDispatch()
  const {label, image} = fabric
  const selection = useSelector((state: RootState) => state.modalFabric.selection)
  const selected = selection ? (selection.collection == collection.label && selection.fabric == label) : false

  return (
    <SCFabricEntity
      onClick={() => {
        let a = new Promise((resolve) => {
          dispatch({
            type: '@@MODAL_FABRIC/SELECT_FABRIC',
            payload: {
              slug: label,
              name: label,
              collection: collection.label,
              category: {
                name: category.category,
                rate: (100+category.scale)/100, // 10% -> 1.1, 20% -> 1.2, 30% -> 1.3
                material: collection.material,
              },
              image: image,
            }
          })
          resolve(true)
        }).then(() => {
          setTimeout(() => {
            dispatch({
              type: AModal.CLOSE,
              payload: {
                target: 'modalFabric',
              }
            })
          }, 200)
        })
      }}
    >
      <Fabric
        active={selected}
      >
        <FabricImage
          src={image}
          alt={label}
          title={collection.label + ' ' + label}
          loading="lazy"
        />
        <FabricTitle>{label}</FabricTitle>
      </Fabric>
    </SCFabricEntity>
  )
}

export default FabricEntity;