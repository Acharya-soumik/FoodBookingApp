import {
  ADD_FOOD,
  ADD_TO_CART,
  PLACE_ORDER,
  CLEAR_HISTORY,
  DEL_ITEM
} from "../Redux/ActionType";

const initialState = {
  rest: [],
  cart: [],
  orderHistory: []
};

const foodReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_FOOD: {
      return {
        ...state,
        rest: [...state.rest, action.payload]
      };
    }

    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    }
    case PLACE_ORDER: {
      return {
        ...state,
        orderHistory: [...state.orderHistory, ...state.cart],
        cart: []
      };
    }

    case CLEAR_HISTORY: {
      return {
        ...state,
        orderHistory: []
      };
    }

    case DEL_ITEM: {
      return state;
    }

    default:
      return state;
  }
};
export default foodReducer;
