import { combineReducers } from 'redux';

import global from './global';
import modules from './../modules';

const stores = [];
console.log(modules);
modules.map(module => {
  if (module.store) {
    let keys = Object.keys(module.store)
    keys.map(item => {
      stores[item] = module.store[item]
    })
  }
})
  console.log(stores);
const rootReducer = combineReducers({
  global,
  ...stores
});

export default rootReducer;
