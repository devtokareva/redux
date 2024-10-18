import { TaskActionTypes, TaskState } from "../types";

const initialState: TaskState = {
  tasks: [],
};

export function userReducer(
  state = initialState,
  action: TaskActionTypes
): TaskState {
  switch (action.type) {
    default:
      return state;
  }
}
