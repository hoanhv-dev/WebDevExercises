import { TasksType } from '@features/Home/types/task';
import TopButton from '../TopButton/TopButton';
import Pagination from '../Pagination/Pagination';

interface TasksListProps {
  tasks: TasksType[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onAddClick: () => void;
  onFilterClick: () => void;
}

const TasksList = ({
  tasks,
  onToggle,
  onDelete,
  currentPage,
  totalPages,
  onPageChange,
  onAddClick,
  onFilterClick,
}: TasksListProps) => (
  <div className="h-[calc(100%-4rem)] ml-[20%] p-8 bg-yellow-50 relative overflow-y-auto">
    <TopButton onAddClick={onAddClick} onFilterClick={onFilterClick} />
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
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  </div>
);

export default TasksList;