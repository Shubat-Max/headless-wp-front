import * as React from 'react';
import {Color} from "./VariatorColorItem.sc";
import {ITerm} from "../../../../types/IProduct";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {AVariator} from "../../../../constants/actions";

const VariatorColorItem = ({ term, taxonomy }: { term: ITerm; taxonomy: string; }): JSX.Element => {

    const { term_slug, term_name, image } = term;
    if (!term || !taxonomy) return null

    const selection = useSelector((state: RootState) => state.product.variator)
    const dispatch = useDispatch();

    let active = selection.reduce((acc, val) => {
        if(acc) return acc;
        if(val.taxonomy_slug === taxonomy && val.term_slug === term_slug) acc = true;
        return acc;
    }, false);

    return (
        <Color
            image={image}
            color={term_slug}
            name={term_name}
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
        />
    );
};

export default VariatorColorItem;