export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
}

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number; // id задачи
}

export type TaskActionTypes = AddTaskAction | ToggleTaskAction;
