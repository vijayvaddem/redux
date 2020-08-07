import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed");
});

store.dispatch(projectAdded({ name: "Project A" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 3 }));
console.log(store.getState());

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

console.log(x);
console.log(y);
console.log(x === y);
