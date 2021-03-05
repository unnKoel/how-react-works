// import { assertType } from "./utils";

const createElement = (ele, attrs, children) => {
   // ? how to assert parameter type
   // ? how to throw error
   
  // if(!assertType(ele, 'String') || !assertType(attrs, 'Object')) {
  //   throw new TypeError(`Types of ele, attrs parameters aren't right`)
  // }

  return {
    ele,
    attrs,
    children,
  };
};

const page = () => {
  return createElement(
    "div",
    {},
    createElement(
      "a",
      { href: "https://www.google.com" },
      "Navtigate to Google"
    )
  );
};

console.log(page())