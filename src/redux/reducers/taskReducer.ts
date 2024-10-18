import { ADD_TASK, TaskActionTypes, TaskState, TOGGLE_TASK } from "../types";

const initialState: TaskState = {
  tasks: [],
};

export function taskReducer(
  state = initialState,
  action: TaskActionTypes
): TaskState {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK:
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
}
