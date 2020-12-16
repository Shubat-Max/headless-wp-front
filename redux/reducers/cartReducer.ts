import {ACart} from "../../constants/actions";

const initialState:any = {
  products: [],
  fabric: false,
  loading: false,
  loaded: false
}

const CartReducer = (state = initialState, action) => {

  switch (action.type) {

    case ACart.ADD: {

      return state
    }

    default:
      return state
  }
}

export default CartReducer;