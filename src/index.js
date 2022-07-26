import { assertType } from "./utils";
import _ from 'lodash';
import Stack from './stack';

export const createElement = (ele, attrs, ...children) => {
   // ? how to assert parameter type
   // ? how to throw error
   attrs = attrs || {};

  if((!assertType(ele, 'String') && !assertType(ele, 'function')) || !assertType(attrs, 'Object')) {
    throw new TypeError(`Types of ele, attrs parameters aren't right`)
  }

  children = _.flatten(children);

  if(assertType(ele, 'function')) {
    const childTreeRoot = componentWrapper(ele)({...attrs, children});
    return childTreeRoot
  }

  return {
    ele,
    attrs,
    children,
  };
};

export const fiberNodeStack = Stack();
let rootFiberNode = null;

const getRootVirtualDomRef = () => {
  return rootFiberNode && rootFiberNode.virtualDomRef;
}

export const getRootFiberNode = () => {
  return rootFiberNode;
}

function createNewFiberNode() {
  return {
    childFiberNode: [],
    parentFiberNode: null,
    virtualDomRef: null,
    states: [],
    stateIndex: 0,
    props: {},
    component: () => null,
  }
}

function componentWrapper(component) {
 const parentFiberNode = fiberNodeStack.peek();

 const fiberNode = createNewFiberNode();
 fiberNode.parentFiberNode = parentFiberNode;
 fiberNode.component = component;

 parentFiberNode && parentFiberNode.childFiberNode.push(fiberNode);
 if(parentFiberNode === undefined) {
   rootFiberNode = fiberNode;
 }

 fiberNodeStack.push(fiberNode);

 return (props) => {
   const componentVirtualDom = component(props);
   fiberNode.stateIndex = 0;
   fiberNode.virtualDomRef = componentVirtualDom;
   
   fiberNodeStack.pop();
   return componentVirtualDom;
 }
}

let currentFiberNode;

function retrieveFiberNodeTree() {
  currentFiberNode = rootFiberNode;
  fiberNodeStack.push(currentFiberNode);
  
}

export {
  retrieveFiberNodeTree,
}
