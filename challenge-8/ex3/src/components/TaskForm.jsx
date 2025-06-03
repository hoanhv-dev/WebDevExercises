import { useState } from "react";

const TaskForm = ({ onClose, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) {
      return;
    }

    onAddTask({
      id: Date.now(),
      title: taskTitle,
      completed: false,
    });

    setTaskTitle("");
    onClose();
  };

  return (
    <form
      id="taskForm"
      className="bg-white p-6 rounded-xl shadow-lg absolute left-1/2 top-40 transform -translate-x-1/2 w-96 flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <label className="block mb-2 text-green-900 font-bold">Task Name</label>
      <input
        type="text"
        id="taskInput"
        className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
        required
        placeholder="Enter task name"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500"
      >
        Add
      </button>
      <button
        id="close-taskform-button"
        type="button"
        onClick={onClose}
        className="absolute top-3 right-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mb-2 text-[10px]"
      >
        X
      </button>
    </form>
  );
};

export default TaskForm;
