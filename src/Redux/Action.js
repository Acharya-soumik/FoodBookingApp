import {
  LOGIN,
  SIGN_UP,
  ADD_FOOD,
  ADD_TO_CART,
  PLACE_ORDER,
  LOG_OUT,
  CLEAR_HISTORY,
  DEL_ITEM
} from "./ActionType";

export const signUp = item => {
  return {
    type: SIGN_UP,
    payload: item
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};

export const login = item => {
  return {
    type: LOGIN,
    payload: item
  };
};

export const delItem = item => {
  return {
    type: DEL_ITEM,
    payload: item
  };
};

export const addFood = item => {
  return {
    type: ADD_FOOD,
    payload: item
  };
};

export const clearHistory = () => {
  return {
    type: CLEAR_HISTORY
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
