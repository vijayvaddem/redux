import store from "./customStore";
import * as actions from "./actions";

store.dispatch(actions.bugAdded("Bug 10"));
console.log(store.getState());
