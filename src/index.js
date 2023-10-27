
let fiberTree = null

const createFiberNode = (type, props) => {
  return {
    type,
    props,
    firstChild: null,
    parent: null,
    nextSibling: null,
  }
}

// it seems that this thought is wrong, as the element createElement return exposes to much inner properties.
const createElement = (type, props, ...children) => {
  const fiberNode = createFiberNode(type, props)
  if(children.length === 0) return fiberNode
  
  let trakingFiberNode = fiberNode
  for(let i = 0; i <= children.length; i++) {
    const childFiberNode = children[i]
    if(i === 0) trakingFiberNode.firstChild = childFiberNode;
    else if(i === children.length) trakingFiberNode.parent = fiberNode;
    else trakingFiberNode.nextSibling = childFiberNode
  }
  
  return fiberNode
}

export {
  createElement,
}
