/**
 * Reduce multiple reducers into a single reducer from left to right.
 * make sure that the first reducer in the list defines the initial state
 */
export function reduceReducers(...reducers) {
  return (store, action) => {
    return reducers.reduce((acc, reducer) => reducer(acc, action), store);
  };
}

/**
 * Another way to handle switch in reducers
 */
export function createReducer(initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };
}

export function getValueByPath(obj, path) {
  if (path.length === 0) return obj;
  return path.reduce((result, key) => (result ? result[key] : obj[key]), null);
}

export function rebuildObjectByPath(location, newValue) {
  return [].concat(location).reverse().reduce((result, pathFragment) => ({
    [pathFragment]: result,
  }), newValue);
}
