import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TasksType } from '@features/Home/storage/types/task';
import { addTask } from '@features/Home/storage/slices/tasksSlice';

type TaskFormProps = {
  initialData?: TasksType;
  onClose: () => void;
};

const TaskForm = ({ onClose, initialData }: TaskFormProps) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(initialData?.title || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTask: TasksType = {
      id: Date.now(),
      title,
      completed: initialData?.completed || false,
    };
    
    dispatch(addTask(newTask));
    onClose();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl p-6 w-full max-w-md shadow-xl'>
        <h2 className='text-2xl font-semibold mb-4'>{initialData ? 'Edit Task' : 'Add New Task'}</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
              Title
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
              required
            />
          </div>
          <div className='flex justify-end gap-4'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            >
              {initialData ? 'Save Changes' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
