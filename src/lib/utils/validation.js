import { compose } from './data'

export function validateCompose(...funcs) {
  return data => compose(...funcs)(data)
}

export function isEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@ก-๙À-ƒ"]+(\.[^<>()\[\]\\.,;:\s@ก-๙À-ƒ"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export function isEmpty(value = true) {
  if (typeof value === 'string') {
    return value.toString().trim() === ''
  } else if (typeof value === 'boolean') {
    return value
  } else if (value === null) {
    return true
  } else if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  return false
}

export function haveSpecialCharacter(text) {
  const pattern = /[\[\]\^\$\|\?\*\+\(\)\\~`\!\/@#%&฿_+={}'""<>:;,]+/g
  return pattern.test(text)
}

export function isNumber(number) {
  const pattern = /^[0-9]*$/g
  return pattern.test(number)
}
