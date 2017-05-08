import { combineReducers } from 'redux'
import error from './error'
import loading from './loading'
import device from './device/deviceReducer'

export default combineReducers({
  error,
  loading,
  device
});
