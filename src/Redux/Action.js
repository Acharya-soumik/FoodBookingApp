import {
  LOGIN,
  SIGN_UP,
  ADD_FOOD,
  ADD_TO_CART,
  PLACE_ORDER
} from "./ActionType";

export const signUp = item => {
  return {
    type: SIGN_UP,
    payload: item
  };
};

export const login = item => {
  return {
    type: LOGIN,
    payload: item
  };
};

export const addFood = item => {
  return {
    type: ADD_FOOD,
    payload: item
  };
};

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const placeOrder = () => {
  return {
    type: PLACE_ORDER
  };
};
