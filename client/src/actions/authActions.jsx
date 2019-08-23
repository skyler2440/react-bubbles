import axiosWithAuth from '../utils/axiosWithAuth'
import { types }from './index'



export const doSignIn = credentials => dispatch => {

//   dispatch({ type: types.LOGIN_START});
  return axiosWithAuth()
    .post('/login', credentials)
    .then(
      res => {
        console.log(res)
        localStorage.setItem('token', (res.data.payload));
        dispatch({type: types.LOGIN_SUCCESS, payload: res.data.payload});
      }
    )
    .catch(
      err => {
        dispatch({type: types.LOGIN_FAIL, payload: err})
        console.log(err)
      }
    )
};



