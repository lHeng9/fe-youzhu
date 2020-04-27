import { handleActions, createActions, combineActions, createAction } from 'redux-actions'
import actionTypes from './actionTypes';
import jwt_decode from 'jwt-decode'

const Authorization: any = localStorage.getItem('Authorization')
const { username } = Authorization ? jwt_decode(Authorization) : { username: '' }

const defaultStatus = {
  username
}
// combineAction createActions func
// const {
//   increment,
//   decrement
// } = createActions({
//   'INCREMENT': (amount = 1) => ({
//     amount
//   }),
//   'DECREMENT': (amount = 1) => ({
//     amount: -amount
//   })
// })

// const reducer = handleActions({
//     [combineActions(increment, decrement)]: (state, {
//       payload: {
//         amount
//       }
//     }) => ({
//       ...state,
//       counter: state.counter + amount
//     })
//   },
//   defaultState)
export const { quitLogin }: any = createActions(actionTypes.quitLogin)
export default handleActions(
  {
    [actionTypes.setCurrentUser]: (state, { payload: { username } }) => {
      return {
        ...state,
        username
      }
    },
    [quitLogin]: (state) => ({
      ...state,
      username: ''
    })
  }, defaultStatus
)