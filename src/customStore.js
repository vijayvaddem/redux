import reducer from "./reducer";

function createStore(reducer) {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    //call reducer
    state = reducer(state, action);
    //notify subscribers
  }

  return {
    dispatch,
    getState,
  };
}

export default createStore(reducer);
