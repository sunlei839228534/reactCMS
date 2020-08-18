import {combineReducers} from 'redux'
import common from './common'
import user from './user'

const reducer = combineReducers(
  {
    common,
    user
  }
)
export default reducer