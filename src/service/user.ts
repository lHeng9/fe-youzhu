import Axios from 'axios'

export const fetchLogin = async (msg: any) => {
  const { data } = await Axios.post('/api/login', msg)
  console.log('fetchlogin', data)
  return data
}

export const fetchRegiste = async (data: any) => {
  const res = await Axios.post('/api/registe', data)
  return res
}