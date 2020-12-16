import React from "react"
import FilterGroup from "./FilterGroup"
import {useSelector} from "react-redux"
import {RootState} from "../../../../redux/store"
import {D_Colors} from "../../../../constants/d_colors"
import {Colors} from "../../../../constants/colors"
import {SCFabricFilter} from "./FabricFilter.sc"

const FabricFilter = () => {

    const entities = useSelector((state: RootState) => state.modalFabric.entities)

    let collectedColors = [], collectedCategories = [], collectedMaterials = [], collectedProperties = []
    let colors = { label: 'Цвет', param_slug: 'color', type: 'color', options: [] }
    let category = { label: 'Категория', param_slug: 'category', type: 'select', options: [] }
    let material = { label: 'Материал', param_slug: 'material', type: 'select', options: [] }
    let property = { label: 'Свойство', param_slug: 'property', type: 'select', options: [] }

    Object.values(entities).map((c:any) => {

        if( !collectedCategories.includes(c.category) ){
            collectedCategories.push(c.category);
            category.options.push({ slug: c.category, name: `${c.category} категория` + (c.scale ? ` (+${c.scale}%)`: '')})
        }

        c.collections.map( collection => {

            if( !collectedMaterials.includes(collection.material.slug) ){
                collectedMaterials.push(collection.material.slug);
                material.options.push({ slug: collection.material.slug, name: collection.material.value })
            }

            collection.properties.map( p => {
                if( !collectedProperties.includes(p.slug) ){
                    collectedProperties.push(p.slug);
                    property.options.push({ slug: p.slug, name: p.name })
                }
            })

            collection.fabrics.map( fabric => {
                if( !collectedColors.includes(fabric.color) ){
                    collectedColors.push(fabric.color)
                    colors.options.push( { slug: fabric.color, name: D_Colors[fabric.color.toUpperCase()], hex: Colors[fabric.color.toUpperCase()] })
                }
            })
        })
    })

    colors.options = colors.options.sort( (a, b) => a.name < b.name ? -1 : 1 )
    category.options = category.options.sort( (a, b) => a.name < b.name ? -1 : 1 )
    material.options = material.options.sort( (a, b) => a.name < b.name ? -1 : 1 )
    property.options = property.options.sort( (a, b) => a.name < b.name ? -1 : 1 )

    const filterOptions = [colors, category, material, property]

    return (
        <SCFabricFilter>
            <FilterGroup filters={filterOptions} />
        </SCFabricFilter>
    );
};

export default FabricFilter;