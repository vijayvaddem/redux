import { configureStore } from "@reduxjs/toolkit";

import reducer from "./bugs";
import { devToolsEnhancer } from "redux-devtools-extension";

export default function () {
  return configureStore({ reducer });
}
