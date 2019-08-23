import axiosWithAuth from '../utils';
import { types }from './index'

export const getEquipmentList = () => dispatch => {
  dispatch({ type: types.GET_LIST_START});
  return axiosWithAuth()
    .get('/rentItems')
    .then(res => {
      // console.log(res.data.rentItems)
      dispatch({type: types.GET_LIST_SUCCESS, payload: res.data.rentItems})
    })
    .catch(err => {
      dispatch({type: types.GET_LIST_FAIL, payload: err})
    })
};

export const getMyEquipmentItem = () => dispatch =>{

  // console.log( types.GET_MY_ITEM_START)
  dispatch({ type: types.GET_MY_ITEM_START});
  return axiosWithAuth()
    .get('/auth/user')
    .then(res => {
      // console.log(res.data.user.rentItems)
      dispatch({type: types.GET_MY_ITEM_SUCCESS, payload: res.data.user.rentItems})
    })
    .catch(err => {
      dispatch({type: types.GET_MY_ITEM_FAIL, payload: err})
    })
};


export const postEquipment = equipment => dispatch =>{
  dispatch({ type: types.POST_LIST_START});
  return axiosWithAuth()
  .post('/rentItems', equipment)
  .then(res => {

    dispatch({type: types.POST_LIST_SUCCESS, payload: res.data.item})
  })
  .catch(err => {
    dispatch({type: types.POST_LIST_FAIL, payload: err})
  })

};




export const editItem = equipment => dispatch =>{
  dispatch({ type: types.PUT_ITEM_START});
  return axiosWithAuth()
  .put(`/rentItems/${equipment.itemId}`, equipment)
  .then(res => {

    dispatch({type: types.PUT_ITEM_SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({type: types.PUT_ITEM_FAIL, payload: err})
  })

};



export const deleteItem = id => dispatch => {
	dispatch({ type: types.DELETE_START });
  return axiosWithAuth()
  .delete(`/rentItems/${id}`)
  .then(res => {

    dispatch({type: types.DELETE_SUCCESS, payload: id})
  })
  .catch(err => {
    dispatch({type: types.DELETE_FAIL, payload: err})
  })

};