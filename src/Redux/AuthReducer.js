import { SIGN_UP, LOGIN } from "./ActionType";

const initialState = {
  username: "abc",
  password: "abc",
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SIGN_UP: {
      return {
        ...state,
        username: action.payload.userName,
        password: action.payload.password
      };
      //   alert("Sign UP Success");
    }

    case LOGIN: {
      const user = action.payload;
      if (user.userName == state.username && user.password == state.password) {
        return {
          ...state,
          isAuth: true
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

export default authReducer;
