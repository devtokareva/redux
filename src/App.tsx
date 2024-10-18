import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTask } from "./redux/actions/taskActions";
import { Task, TaskActionTypes, TaskState } from "./redux/types";
import { Dispatch } from "redux";

function App() {
  const [taskText, setTaskText] = useState<string>("");

  const tasks = useSelector((state: TaskState) => state.tasks);

  const dispatch: Dispatch<TaskActionTypes> = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <h1>Список задач</h1>
      <input
        onChange={handleInputChange}
        value={taskText}
        type="text"
        placeholder="Введите задачу"
      />
      <button onClick={handleAddTask}>Добавить</button>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
