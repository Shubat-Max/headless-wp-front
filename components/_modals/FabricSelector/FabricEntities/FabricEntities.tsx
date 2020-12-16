import React from 'react'
import FabricEntity from "../FabricEntity"

const FabricEntities = ({fabrics, collection, category}) => {
  return (
    <div>
      {fabrics.sort((a:any, b:any) =>
        parseInt(a.label) && parseInt(b.label) ?
          parseInt(a.label) < parseInt(b.label) ? -1 : 1 :
          a.label < b.label ? -1 : 1
      ).map((fabric, index) => <FabricEntity key={index} fabric={fabric} collection={collection} category={category}/>)}
    </div>
  )
}

export default FabricEntities