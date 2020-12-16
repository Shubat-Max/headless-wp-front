import React from 'react'
import FabricEntities from "../FabricEntities"
import {
  Collection, CollectionDescription,
  CollectionDescriptionSwitch, CollectionDescriptionText,
  CollectionHead, CollectionLabel,
  CollectionTitle, CollectionType
} from "./FabricCollection.sc"

const FabricCollection = ({ collection, category, scale }) => {

    const { label, anchor, material, properties, fabrics, description } = collection
    const [activeDescription, setActiveDescription] = React.useState( false )

    return (
        <Collection>
            <CollectionHead>
                <CollectionTitle>
                    <CollectionLabel>{label}</CollectionLabel>
                    <CollectionType>{material.value}</CollectionType>
                </CollectionTitle>
                <CollectionDescriptionSwitch onClick={() => setActiveDescription( !activeDescription )}>Описание ткани</CollectionDescriptionSwitch>
            </CollectionHead>

            <CollectionDescription active={activeDescription}>
                <CollectionDescriptionText>{description.split('\n\r').map(d => <div>{d}<br/></div>)}</CollectionDescriptionText>
            </CollectionDescription>

            {/*{properties.map(p => <div>{p.name}</div>)}*/}
            {/**/}
            <FabricEntities fabrics={fabrics} collection={{ anchor, label, material: material.value }} category={{category, scale}}/>
        </Collection>
    );
};

export default FabricCollection