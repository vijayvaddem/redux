import store from "./store";
import { bugAdded, bugResolved } from "./actions";
import * as actionTypes from "./actionTypes";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

unsubscribe();

console.log(store.getState());
