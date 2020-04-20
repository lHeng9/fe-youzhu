import Axios from 'axios'
import setAuthToken from '../common/AuthToken'
import jwt_decode from 'jwt-decode'
import Store from '../redux/store'

export const fetchLogin = async (data: any) => {
  const res = await Axios.post('/api/login', data)
    .then(res => {
      console.log(res)
      const { success } = res.data
      if (success) {
        localStorage.setItem('Authorization', res.data.token)
        setAuthToken(res.data.token)
        const decode: { 'username': string } = jwt_decode(res.data.token)
        console.log(decode)
        //{username: "luheng", iat: 1587130128}
        Store.dispatch({
          type: 'setCurrentUser',
          value: decode.username
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
  return res
}