import assign from 'lodash/assign'
import { SET_PLATFORM } from '../../lib/constants/actionTypes'

const initialState = {
  platform: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLATFORM: {
      const platform = action.payload
      return assign({}, state, { platform })
    }
    default:
      return state
  }
}
