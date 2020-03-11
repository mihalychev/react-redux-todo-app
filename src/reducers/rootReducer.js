import { combineReducers } from 'redux';
import dirs from './dirs';
import todos from './todos';
import modal from './modal';

const rootReducer = combineReducers({
  dirs,
  todos,
  modal
})

export default rootReducer;