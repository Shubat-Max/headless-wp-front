import {AModalCollection} from "../../constants/actions";


interface IInitialState {
  entities: any;
}


const initialState: IInitialState = {
  entities: [],
}


const collectibleSelectorReducer = ( state = initialState, action ) => {

  switch( action.type ){
    case AModalCollection.FETCH_SUCCESS: {
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

export default collectibleSelectorReducer;