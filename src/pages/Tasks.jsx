import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";
import Card from "../components/Card";

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const filteredTasks = tasks.filter(task => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
          placeholder="Add a new task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        {["All", "Active", "Completed"].map(f => (
          <Button key={f} onClick={() => setFilter(f)}>{f}</Button>
        ))}
      </div>

      <div>
        {filteredTasks.map(task => (
          <Card key={task.id}>
            <div className="flex justify-between items-center">
              <span className={task.completed ? "line-through" : ""}>{task.text}</span>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => toggleTask(task.id)}>Toggle</Button>
                <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
