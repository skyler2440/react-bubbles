import axiosWithAuth from '../utils/axiosWithAuth'
import { types }from './index'


  return axiosWithAuth()
    .post('/login', credentials)
    .then(
      res => {
        console.log(res)
        localStorage.setItem('token', (res.data.payload));
      }
    )
    .catch(
      err => {
        console.log(err.response)
      }
    )




