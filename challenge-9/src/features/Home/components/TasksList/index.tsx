import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@storage/store';
import { setCurrentPage } from '../../storage/slices/tasksSlice';
import { selectCurrentPage, selectTotalPages, selectPaginatedTasks } from '../../storage/selectors/tasksSelector';
import TopButton from '../TopButton/TopButton';
import Pagination from '../Pagination/Pagination';
import { TasksType } from '@features/Home/storage/types/task';

interface TasksListProps {
  onStatusUpdate: (task: TasksType) => void;
  onDelete: (task: TasksType) => void;
  onAddClick: () => void;
  onFilterClick: () => void;
}

const TasksList = ({  
  onStatusUpdate,
  onDelete,
  onAddClick,
  onFilterClick,
}: TasksListProps) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: AppState) => selectCurrentPage(state));
  const paginatedTasks = useSelector((state: AppState) => selectPaginatedTasks(state));
  const totalPages = useSelector((state: AppState) => selectTotalPages(state));

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
  <div className='h-[calc(100%-4rem)] ml-[20%] p-8 bg-yellow-50 relative overflow-y-auto'>
    <TopButton onAddClick={onAddClick} onFilterClick={onFilterClick} />
    <ul className='space-y-2 mt-6'>
      {paginatedTasks.map((task) => (
        <li key={task.id} className='flex items-center bg-white shadow p-3 rounded'>
          <input type='checkbox' className='mr-2' checked={task.completed} onChange={() => onStatusUpdate(task)} />
          <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.title}</span>
          <button
            className='bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600'
            onClick={() => onDelete(task)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
  </div>
  );
};

export default TasksList;
