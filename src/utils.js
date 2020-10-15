export function checkObjectOrArray(value) {
  return (
    Object.prototype.toString.call(value) === '[object Object]' ||
    Object.prototype.toString.call(value) === '[object Array]'
  )
}

export function isNumber(value) {
  return Object.prototype.toString.call(value) === '[object Number]'
}

export function isNull(value) {
  return Object.prototype.toString.call(value) === '[object Null]'
}

export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}

export function isUndefined(value) {
  return Object.prototype.toString.call(value) === '[object Undefined]'
}

export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}
