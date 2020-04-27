import { fetchTypes } from '../../service/types'
import actionTypes from './actionTypes'
import { createAction, createActions } from 'redux-actions'

export const fetchTypesThunk = () =>
  async (dispatch: any) => {
    const res = await fetchTypes()
    console.log('thunk', res)
    if (res.success) {
      dispatch(createAction(actionTypes.getTypes)({ allTypes:res.data }))
    }
    return res
  }