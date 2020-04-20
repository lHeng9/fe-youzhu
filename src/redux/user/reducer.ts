import { handleActions } from 'redux-actions'
import actionTypes from './action-types';
const defaultStatus = {
  username: ''
}
export default (state = defaultStatus, action: any) => {
  if (action.type === 'setCurrentUser') {
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    console.log(action)
    newState.username = action.value
    return newState
  }
  return state
}