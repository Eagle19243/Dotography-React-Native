import { SET_PLATFORM } from '../../lib/constants/actionTypes'

export const setPlatform = platform => ({
  type: SET_PLATFORM,
  payload: platform
})

export const exampleCallApiFunction = (data) => {
  const result = {
    types: ['CALL_API_REQUEST', 'CALL_API_SUCCESS', 'CALL_API_FAILURE'],
    endpoint: '/endpoint',
    options: {
      method: 'POST',
      body: data
    }
  }
  return result
}
