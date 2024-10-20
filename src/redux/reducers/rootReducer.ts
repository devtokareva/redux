import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  todos: taskReducer,
  user: userReducer,
});
