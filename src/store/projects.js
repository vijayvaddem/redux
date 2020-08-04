import { createSlice } from "@reduxjs/toolkit";
import { lastIndexOf } from "lodash";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export default slice.reducer;
export const { projectAdded } = slice.actions;
