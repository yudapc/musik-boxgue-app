import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './global-state';

const reducers = combineReducers({
  globalReducer
});
export const store = createStore(reducers, applyMiddleware(thunk));

export default store;
