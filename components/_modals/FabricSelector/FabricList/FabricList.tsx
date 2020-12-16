import React from "react"
import {useSelector} from "react-redux"
import {RootState} from "../../../../redux/store"
import FabricCategory from "../FabricCategory"

// todo: finish fabric filtering

const FabricList = () => {

  const {fabricList, filter} = useSelector((state: RootState) => {
    return {fabricList: state.modalFabric.entities, filter: state.modalFabric.filter}
  })

  // filter fabric list based on selected values
  let fabricListTemp = JSON.parse(JSON.stringify(fabricList)); // deep object copy - dont fuck with it
  // let filteredList = Object.values(fabricListTemp).filter((cat: any, i: any) => {
  //
  //   // filter by category
  //   if (filter?.category && filter?.category.length !== 0) {
  //     return !filter?.category.reduce((acc, val) => {
  //       if (cat.category === val.slug) {
  //         acc = false
  //       }
  //       return acc
  //     }, true)
  //   }
  //
  //   cat.collections = cat.collections.filter(col => {
  //
  //     if (filter?.material && filter?.material.length !== 0) {
  //       return !filter?.material.reduce((acc, val) => {
  //         if (col.material.slug === val.slug) {
  //           acc = false
  //         }
  //         return acc
  //       }, true)
  //     }
  //
  //     if (filter?.property && filter?.property.length !== 0) {
  //       return filter?.property.reduce((acc, val) => {
  //         if( !acc ) return acc;
  //         return !col.properties.reduce((ac, p) => {
  //           if( p.slug === val.slug ) ac = false;
  //           return ac;
  //         }, true)
  //       }, true)
  //     }
  //
  //     // col.fabrics.filter( fab => {
  //     // // colors
  //     // })
  //
  //     return true
  //   })
  //
  //   return true
  // })

  // filter by category
  // let filteredList = Object.values(fabricListTemp).filter((category: any) => {
  //   return filter.category.length ? filter.category.map(c => c.slug).includes(category.category) : true
  // });
  // filteredList = filteredList.filter((category: any) => {
  //
  // })


  return (
    <div>
      {fabricList.map((category, i) => <FabricCategory key={i} categoryData={category}/>)}
    </div>
  )
}

export default FabricList