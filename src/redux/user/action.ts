import { fetchLogin } from '../../service/user'
import actionTypes from './actionTypes'
import { createAction } from 'redux-actions'
import setAuthToken from '../../common/AuthToken'
import jwt_decode from 'jwt-decode'

export const fetchLoginThunk: any = (data: any) =>
  async (dispatch: any) => {
    const res = await fetchLogin(data)
    if (res.success) {
      localStorage.setItem('Authorization', res.token)
      setAuthToken(res.token)
      const decode: { 'username': string } = jwt_decode(res.token)
      dispatch(createAction(actionTypes.setCurrentUser)(decode))
    } 
    return res
  }