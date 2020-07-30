import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    //call reducer
    state = reducer(state, action);
    //notify subscribers
    for (let i = 0; i < listeners.length; i++) listeners[i]();
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}

export default createStore(reducer);
