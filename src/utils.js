const assertType = (value, type) => {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

export {
  assertType,
}