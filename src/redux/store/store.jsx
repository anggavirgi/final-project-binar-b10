import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducer";
import { thunk } from "redux-thunk";

export default configureStore({
  reducer: rootReducer,
  middleware: (getMiddleware) => getMiddleware().concat(thunk),
});
