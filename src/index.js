import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed");
});

store.dispatch(userAdded({ name: "Vijay" }));
// store.dispatch(userAdded({ name: "Kumar" }));
// store.dispatch(projectAdded({ name: "Project A" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 3 }));

console.log(store.getState());

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

const bugs = getBugsByUser(2)(store.getState());
console.log(bugs);
//console.log(getBugsAssignedTo(store.getState(), "Vijay"));

//console.log(x);
//console.log(y);
//console.log(x === y);
