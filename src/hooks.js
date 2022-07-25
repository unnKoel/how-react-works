import { currentFiberNode } from './index';

const useState = (initialValue) => {
  const { stateIndex } = currentFiberNode; 
  const value = currentFiberNode.states[stateIndex];
  if(!value) {
     currentFiberNode.states[stateIndex] = initialValue;
  }

  const setValue = (value) => {
    currentFiberNode.states[stateIndex] = value;
  }

  currentFiberNode.stateIndex = ++stateIndex;

  return [value || initialValue, setValue];
};


export {
  useState,
}
