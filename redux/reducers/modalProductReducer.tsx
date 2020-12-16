import {AModalProduct} from "../../constants/actions";


interface IInitialState {
  entity: any;
}


const initialState: IInitialState = {
  entity: [],
}


const modalProductReducer = ( state = initialState, action ) => {

  switch( action.type ){
    case AModalProduct.FETCH_SUCCESS: {
      const { payload: {data} } = action;

      return {
        ...state,
        entities: data
      }
    }

    default:
      return state
  }
}

export default modalProductReducer;