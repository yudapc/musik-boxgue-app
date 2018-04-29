import { Action } from 'redux';
import { ActionTypes } from './action-types';

const initialGlobalState = {
  isConnected: true
};
const globalReducer = (state = initialGlobalState, action) => {
  if (action.type === ActionTypes.GLOBAL_CONNECTION) {
    return Object.assign({}, state, {
      isConnected: action.isConnected
    });
  }
  return state;
};

export default globalReducer;
