import { assertType } from "./utils";

export const createElement = (ele, attrs, children) => {
   // ? how to assert parameter type
   // ? how to throw error
   
  if(!assertType(ele, 'String') || !assertType(attrs, 'Object')) {
    throw new TypeError(`Types of ele, attrs parameters aren't right`)
  }

  children = Array.isArray(children) ? children : [ children ];

  return {
    ele,
    attrs,
    children,
  };
};
