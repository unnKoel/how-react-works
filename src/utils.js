const assertType = (value, type) => {
  if(type === 'function'){
    return typeof value === type;
  }

  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

export {
  assertType,
}
