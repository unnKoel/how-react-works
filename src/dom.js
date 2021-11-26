
const innerRender = (virtualDom = {}) => {
  let element;
  if (typeof virtualDom === 'string') {
    element = document.createTextNode(virtualDom);
    return element;
  }
  const { ele, attrs, children } = virtualDom;
  element = document.createElement(ele);
  for (let attrName in attrs) {
    element.setAttribute(attrName, attrs[attrName]);
  }
  const childrenNodeArray = children.map(child => innerRender(child));

  element.append(...childrenNodeArray);

  return element;
}

const render = (virtualDom, container) => {
  // const fragment = new DocumentFragment();
  const realDom = innerRender(virtualDom);

  console.log(realDom.outerHTML);
  (typeof container === 'string' ? document.querySelector(container) : container).append(realDom);
}

export {
  render,
}
