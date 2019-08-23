import { types } from "../actions";

const initialState = {
  token: '',
  user: null,
  isAuth: false,
  isLoading: false,
  errors: null,
  isSuccess: false
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
  
      case types.LOGIN_START:
        return {
          ...state,
          isLoading: true,
          errors: null,
          isAuth: false,
          isSuccess: false
        };
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          token: payload.token,
          user: payload.user,
          isSuccess: true
        };
      case types.LOGIN_FAIL:
        return {
          ...state,
          errors: payload,
          isLoading: false,
        };

      default:
        return state;
    }
  };
  