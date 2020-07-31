import store from "./store";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Store changed");
});

store.dispatch(actions.bugAdded("Bug 10"));
store.dispatch(actions.bugAdded("Bug 20"));
store.dispatch(actions.bugAdded("Bug 30"));
store.dispatch(actions.bugAdded("Bug 40"));
console.log(store.getState());
