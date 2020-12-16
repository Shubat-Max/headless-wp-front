import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import modalFabricReducer from "./reducers/modalFabricReducer";
import modalCollectionReducer from "./reducers/modalCollectionReducer";
import modalProductReducer from "./reducers/modalProductReducer";
import modalsReducer from "./reducers/modalsReducer";
import productReducer from "./reducers/productReducer";
import indexPageReducer from "./reducers/indexPageReducer";
import cartReducer from "./reducers/cartReducer";
import catalogReducer from "./reducers/catalogReducer";

let store

export const rootReducer = combineReducers({
    modalFabric: modalFabricReducer,
    modalCollectibles: modalCollectionReducer,
    modalProduct: modalProductReducer,
    modals: modalsReducer,
    product: productReducer,
    indexPage: indexPageReducer,
    cart: cartReducer,
    catalog: catalogReducer,
});

export type RootState = ReturnType<typeof rootReducer>

function initStore(preloadedState = {}){
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if( preloadedState && store ){
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        })

        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if( !store ) store = _store

    return _store
}

export function useStore( initialState ){
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store;
}