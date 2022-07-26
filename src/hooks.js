import { fiberNodeStack, retrieveFiberNodeTree } from './index';

const useState = (initialValue) => {
  const fiberNode = fiberNodeStack.peek();

  const { stateIndex } = fiberNode; 
  const value = fiberNode.states[stateIndex];
  
  if(!value) {
    fiberNode.states[stateIndex] = initialValue;
  }

  const setState = (value) => {
    fiberNode.states[stateIndex] = value;
    // trigger retrieving fiber node tree.
    retrieveFiberNodeTree();
  }

  fiberNode.stateIndex = ++stateIndex;

  return [value || initialValue, setState];
};


export {
  useState,
}
