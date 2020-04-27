import { handleActions } from 'redux-actions'
import actionTypes from './actionTypes'

const defaultStatus = {
  allTypes:[]
}

export default handleActions({
  [actionTypes.getTypes]: (state, { payload: { allTypes } }) => {
    console.log('reducer',allTypes)
    return {
      ...state,
      allTypes
    }
  }
},defaultStatus)