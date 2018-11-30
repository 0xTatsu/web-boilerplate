import { combineReducers } from 'redux';
import { reduceReducers } from '@/utils/reducerUtils';
import { connectRouter } from 'connected-react-router';

import history from './history';
import defaultState from './default-state';
import { dataActionConst } from './data-action';
import * as immutable from '../utils/immutable';
import modals from '@/modules/modals/reducer';

// Put new reducers here
const reducers = {
  modals,
};
const defaultReducer = (s = {}) => s;
const combinedReducers = combineReducers(
  Object.keys(defaultState).reduce((result, key) => {
    return Object.assign({}, result, {
      [key]: reducers[key] ? reducers[key] : defaultReducer,
    });
  }, reducers),
);

const DTKey = '_DATA/';
function dataReducer(state = defaultState, action) {
  const rIndex = action.type.indexOf(DTKey);
  const type = (rIndex >= 0) ? action.type.substring(0, rIndex + (DTKey.length - 1)) : action.type;
  if (Object.keys(dataActionConst).includes(type)) {
    return immutable[type.toLowerCase()](state, action.meta._path, action.payload);
  }
  return state;
}

const reducedReducers = reduceReducers(combinedReducers, dataReducer);

export default connectRouter(history)(reducedReducers);
