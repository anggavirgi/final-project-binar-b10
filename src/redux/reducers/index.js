import { combineReducers } from "redux";
import meSlice from "./auth/meReducer";

const rootReducers = combineReducers({
  user: meSlice,
});

export default rootReducers
