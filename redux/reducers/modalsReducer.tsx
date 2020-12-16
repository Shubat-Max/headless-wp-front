import {AModal, AModalCollection, AModalFabric, AModalProduct} from "../../constants/actions";

const modalsInitialState = {
    modalFabric: {
        shown: false,
        data: {},
        loading: true,
        loaded: false,
        timestamp: null,
    },
    modalCollectibles: {
        shown: false,
        data: {},
        loading: true,
        loaded: false,
        timestamp: null,
    },
    modalProduct: {
        shown: false,
        data: {},
        loading: true,
        loaded: false,
        timestamp: null,
    }
}

const modalsReducer = ( state = modalsInitialState, action ) => {

    switch( action.type ){
        case AModal.OPEN: {
            const { payload: {target} } = action;

            return {
                ...state,
                [target]: {
                    ...state[target],
                    shown: true,
                }
            }
        }
        case AModal.CLOSE: {
            const { payload: {target} } = action;

            return {
                ...state,
                [target]: {
                    ...state[target],
                    shown: false,
                }
            }
        }
        case "RESET_MODAL":
            return {
                ...state,
            }
        case AModalFabric.FETCH_SUCCESS:
        case AModalFabric.FETCH_RETRY:
        case AModalFabric.FETCH_ERROR: {
            const { payload: {target, loading, loaded} } = action;
            return {
                ...state,
                [target]: {
                    ...state[target],
                    timestamp: Date.now(),
                    loading: loading,
                    loaded: loaded,
                },
            }
        }

        case AModalCollection.FETCH_SUCCESS:
        case AModalCollection.FETCH_RETRY:
        case AModalCollection.FETCH_ERROR: {
            const { payload: {target, loading, loaded} } = action;
            return {
                ...state,
                [target]: {
                    ...state[target],
                    timestamp: Date.now(),
                    loading: loading,
                    loaded: loaded,
                },
            }
        }

        case AModalProduct.FETCH_SUCCESS:
        case AModalProduct.FETCH_RETRY:
        case AModalProduct.FETCH_ERROR: {
            const { payload: {target, loading, loaded} } = action;
            return {
                ...state,
                [target]: {
                    ...state[target],
                    timestamp: Date.now(),
                    loading: loading,
                    loaded: loaded,
                },
            }
        }

        default:
            return state
    }
}

export default modalsReducer;