import { TasksListProps } from '@features/Home/types/task';
import TopButton from '../TopButton/TopButton';
import Pagination from '../Pagination/Pagination';

const TasksList = ({
  tasks,
  onToggle,
  onDelete,
  currentPage,
  totalPages,
  onPageChange,
  onAddClick,
  onFilterClick,
}: TasksListProps) => {
  return (
    <div className='flex-1 p-6'>
      <TopButton onAddClick={onAddClick} onFilterClick={onFilterClick} />
      <div className='mt-6 space-y-4'>
        {tasks.map((task) => (
          <div key={task.id} className='bg-white rounded-xl p-4 shadow-md flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <input
                type='checkbox'
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className='h-5 w-5 text-green-600 focus:ring-green-500 rounded'
              />
              <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.title}</span>
            </div>
            <button
              onClick={() => onDelete(task.id)}
              className='text-red-600 hover:text-red-800 focus:outline-none'
              aria-label='Delete task'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {totalPages > 1 && 
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      }
    </div>
  );
};

export default TasksList;
