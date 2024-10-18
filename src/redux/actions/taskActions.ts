import { ADD_TASK, Task, TaskActionTypes, TOGGLE_TASK } from "../types";

export function addTask(text: string): TaskActionTypes {
  const newTask: Task = {
    text,
    id: Date.now(),
    completed: false,
  };

  return {
    type: ADD_TASK,
    payload: newTask,
  };
}

export function toggleTask(id: number): TaskActionTypes {
  return {
    type: TOGGLE_TASK,
    payload: id,
  };
}
