import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './global-state';
import pageChordsReducer from '../components/page-chords/reducer';

const reducers = combineReducers({
  pageChordsReducer,
  globalReducer
});
export const store = createStore(reducers, applyMiddleware(thunk));

export default store;
