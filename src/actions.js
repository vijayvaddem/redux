import * as actionTypes from "./actionTypes";

export function bugAdded(description) {
  return {
    type: actionTypes.BUG_ADDED,
    payload: {
      description,
    },
  };
}

export const bugResolved = (id) => ({
  type: actionTypes.BUG_RESOLVED,
  payload: {
    id,
  },
});
