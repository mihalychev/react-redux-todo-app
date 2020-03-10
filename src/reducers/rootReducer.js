import { combineReducers } from 'redux';
import dirs from './dirs';
import todos from './todos';

const rootReducer = combineReducers({
  dirs,
  todos
})

export default rootReducer;