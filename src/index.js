import { assertType } from "./utils";
import _ from 'lodash';

export const createElement = (ele, attrs, ...children) => {
   // ? how to assert parameter type
   // ? how to throw error
   attrs = attrs || {};

  if((!assertType(ele, 'String') && !assertType(ele, 'function')) || !assertType(attrs, 'Object')) {
    throw new TypeError(`Types of ele, attrs parameters aren't right`)
  }

  children = _.flatten(children);

  if(assertType(ele, 'function')) {
    const childTreeRoot = ele({...attrs, children});
    return childTreeRoot
  }

  return {
    ele,
    attrs,
    children,
  };
};
