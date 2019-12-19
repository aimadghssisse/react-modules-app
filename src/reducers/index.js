import { combineReducers } from 'redux';

import global from './global';

const rootReducer = combineReducers({
  global: global,
});

export default rootReducer;
