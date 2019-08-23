import axiosWithAuth from '../utils/axiosWithAuth';
import { types }from './index'

export const getColorList = () => dispatch => {
  dispatch({ type: types.GET_ITEM_START});
  return axiosWithAuth()
    .get('/colors')
    .then(res => {
      console.log("colorlist res", res.data);
      dispatch({ type: types.FETCH_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({type: types.GET_ITEM_FAIL, payload: err})
    })
};


export const postColors = colors => dispatch =>{
  //dispatch({ type: types.POST_ITEM_START});
  return axiosWithAuth()
  .post('/colors', colors)
  .then(res => {

    //dispatch({type: types.POST_ITEM_SUCCESS, payload: res.data.item})
  })
  .catch(err => {
    //dispatch({type: types.POST_ITEM_FAIL, payload: err})
  })

};




export const editItem = colors => dispatch =>{
  //dispatch({ type: types.PUT_ITEM_START});
  return axiosWithAuth()
  .put(`/colors/${colors.itemId}`, colors)
  .then(res => {

    //dispatch({type: types.PUT_ITEM_SUCCESS, payload: res.data})
  })
  .catch(err => {
    //dispatch({type: types.PUT_ITEM_FAIL, payload: err})
  })

};



export const deleteItem = id => dispatch => {
	//dispatch({ type: types.DELETE_START });
  return axiosWithAuth()
  .delete(`/colors/${id}`)
  .then(res => {

    //dispatch({type: types.DELETE_SUCCESS, payload: id})
  })
  .catch(err => {
    //dispatch({type: types.DELETE_FAIL, payload: err})
  })

};