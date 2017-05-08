'user strict'

import { assign, reduce } from 'lodash'
import { Schema, normalize } from 'normalizr'

import { API_ROOT_USER_LOGIN } from '../../lib/constants/global'
import { API_ENDPOINT } from '../../lib/constants/Endpoints'

import api from '../services/api'

export function paginationFromAPI(json) {
  if (!json.count) {
    return undefined
  }

  const total = json.count;
  const { offset = 0, limit = 500 } = json.params;
  const totalPage = Math.ceil(total / limit)
  const currentPage = Math.floor(offset / limit);

  const params = reduce(json.params, (reduced, data, key) => {
    reduced[key] = data
    return reduced
  }, {})


  return assign({}, {
    totalPage,
    currentPage,
    total
  }, params)
}

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export function callApi(endpoint, options = {}, schema, userToken) {
  let token = (userToken !== null && userToken !== '') ? userToken : null
  // if (endpoint === `http://192.168.3.9:9100/api/v1/resendverification`) {
  //   token = (userToken !== null && userToken !== '') ? userToken : null
  // }

  let payload = options.body
  if (!options.method) {
    options.method = 'get'
    payload = options.query
	}
	return api[options.method.toLowerCase()](endpoint, payload, { 'Authorization': token })
  .then(json => {
    if (json.errors || json.error) {
      return Promise.reject(json)
    }

    const pagination = paginationFromAPI(json);
    const data = (schema) ? normalize(json.data, schema) : { result: json.data }

			return pagination ? assign({}, data, pagination) : data
    }, err => {
      return Promise.reject([(err instanceof Error) ? err.message : err])
    })
}

function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      endpoint,
      options = {},
      schema = '',
      shouldCallAPI = () => true,
      payload = {}
    } = action

    if (!types) {
      // Normal action: pass it on
      return next(action)
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.')
    }

    if (typeof endpoint !== 'string') {
      throw new Error('Specify a string endpoint URL.')
    }

    if (!shouldCallAPI(getState())) {
      return
    }

    const [requestType, successType, failureType] = types

    next(assign({}, payload, {
      type: requestType
    }))

    const getUserToken = (getState().user.token ? getState().user.token : null)

    return callApi(endpoint, options, schema, getUserToken).then(
      response => {
        return next(assign({}, payload, {
          type: successType,
          data: response,
          receivedAt: Date.now()
        }))
      },
      error => {
        return next(assign({}, payload, {
          type: failureType,
          error: error.error || error.errors,
          code: error.code || 0
        }))
      }
    )
  }
}

export default callAPIMiddleware;
