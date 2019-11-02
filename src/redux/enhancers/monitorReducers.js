/* eslint-disable no-console */
const monitorReducerEnhancer = createStore => (
  reducer,
  initialState,
  enhancer
) => {
  const monitoredReducer = (state, action) => {
    const identifier = 'reducer process time';
    console.time(identifier);
    const newState = reducer(state, action);
    console.timeEnd(identifier);

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

export default monitorReducerEnhancer;
