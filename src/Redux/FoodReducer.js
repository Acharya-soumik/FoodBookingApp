import { ADD_FOOD, ADD_TO_CART } from "../Redux/ActionType";

const initialState = {
  rest: [],
  cart: []
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

    default:
      return state;
  }
};
export default foodReducer;
