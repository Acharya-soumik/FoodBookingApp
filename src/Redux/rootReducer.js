import { combineReducers } from "redux";
import foodReducer from "./FoodReducer";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  getFood: foodReducer
});

export default rootReducer;
