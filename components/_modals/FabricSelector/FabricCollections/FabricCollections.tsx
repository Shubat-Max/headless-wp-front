import React from "react"
import FabricCollection from "../FabricCollection"
import {SCFabricCollections} from "./FabricCollections.sc"

const FabricCollections = ({collections, category, scale}) => {
  return (
    <SCFabricCollections>
      {collections
        .sort((a:any, b:any) => a.label < b.label ? -1 : 1)
        .map((collection, i) => <FabricCollection key={i} collection={collection} category={category} scale={scale}/>)
      }
    </SCFabricCollections>
  )
}

export default FabricCollections