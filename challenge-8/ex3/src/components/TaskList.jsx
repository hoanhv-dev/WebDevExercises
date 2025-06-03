const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul className="space-y-2 mt-6">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center bg-white shadow p-3 rounded">
          <input
            type="checkbox"
            className="mr-2"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.title}
          </span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
