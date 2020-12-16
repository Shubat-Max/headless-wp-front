
import { allFabrics } from '../../__mocks__/fabrics';
import {AModalFabric} from "../../constants/actions";


interface IInitialState {
    filter: any;
    entities: any;
    selection: {
        collection: string;
        fabric: string;
    };
}

const initialState: IInitialState = {
    filter: {},
    entities: [],
    selection: {
        collection: '',
        fabric: '',
    },
}

const fabricSelectorReducer = ( state = initialState, action ) => {

    switch( action.type ){
        case "ADD_FILTER_ENTITY": {
            const { parameter, slug, name } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [parameter]: state.filter[parameter] ? [...state.filter[parameter], { slug, name }] : [{ slug, name }]
                },
            }
        }
        case "REMOVE_FILTER_ENTITY": {
            const { parameter, slug } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [parameter]: state.filter[parameter].filter( o => o.slug !== slug )
                }
            }
        }
        case "RESET_FILTER_ENTITIES": {
            return {
                ...state,
                filter: initialState.filter,
            }
        }
        case "@@MODAL_FABRIC/SELECT_FABRIC": {
            const { collection, slug } = action.payload;
            return {
                ...state,
                selection: {
                    collection,
                    fabric: slug
                }
            }
        }
        case "@@MODAL_FABRIC/RESET_FABRIC": {
            return { ...state }
        }

        case AModalFabric.FETCH_SUCCESS: {
            const { payload: {data} } = action;

            return {
                ...state,
                entities: Object.values(data).sort((a:any, b:any) => a.category < b.category ? -1 : 1)
            }
        }

        default:
            return state
    }
}

export default fabricSelectorReducer;