
const API_PROD_URL = ''
const API_DEV_URL = ''

let currentUrl = API_DEV_URL
let currentEnv = 'development'

if (!global.__DEV__) {
  currentUrl = API_PROD_URL
  currentEnv = 'production'
}

export const API_ROOT = currentUrl
export const ENVIRONMENT = currentEnv
