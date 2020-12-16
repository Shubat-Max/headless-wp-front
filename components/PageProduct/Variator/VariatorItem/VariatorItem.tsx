import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {AVariator} from "../../../../constants/actions";
import {Item} from "./VariatorItem.sc";

const VariatorItem = ({ attribute, taxonomy }) => {
    if (!attribute) return null
    const { term_name, term_slug } = attribute;
    const selection = useSelector((state: RootState) => state.product.variator)
    const dispatch = useDispatch();

    let active = selection ? selection.reduce((acc, val) => {
        if(acc) return acc;
        if(val.taxonomy_slug === taxonomy && val.term_slug === term_slug) acc = true;
        return acc;
    }, false) : '';
    console.log(attribute, taxonomy)

    return (
        <Item
            active={active}
            onClick={() => {
                dispatch({
                    type: AVariator.UPDATE_OPTIONS,
                    payload: {
                        taxonomy_slug: taxonomy,
                        term_slug: term_slug,
                        term_name: term_name,
                    }
                })
            }}
        >
            {term_name}
        </Item>
    );
};

export default VariatorItem;