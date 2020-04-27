import Axios from 'axios'

export const fetchTypes = async () => {
  const { data } = await Axios.get('/api/types')
  console.log('fetchtypes', data)
  return data
}