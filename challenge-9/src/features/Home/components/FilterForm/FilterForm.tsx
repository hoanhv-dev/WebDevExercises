import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { applyFilter } from '@features/Home/storage/slices/tasksSlice';

type FilterFormValues = {
  completed: 'all' | 'completed' | 'not-completed';
  onClose: () => void;
};

const FilterForm = ({ onClose }: FilterFormValues) => {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm<FilterFormValues>({
    defaultValues: { completed: 'all' },
  });

  const onSubmit = (values: FilterFormValues) => {
    let completed: boolean | null = null;
    if (values.completed === 'completed') completed = true;
    else if (values.completed === 'not-completed') completed = false;
    
    dispatch(applyFilter({ completed }));
    onClose();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl p-6 w-full max-w-md shadow-xl'>
        <h2 className='text-2xl font-semibold mb-4'>Filter Tasks</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Status</label>
            <div className='space-y-2'>
              <Controller
                name='completed'
                control={control}
                render={({ field }) => (
                  <>
                    <label className='flex items-center'>
                      <input
                        type='radio'
                        value='all'
                        checked={field.value === 'all'}
                        onChange={() => field.onChange('all')}
                        className='h-4 w-4 text-green-600 focus:ring-green-500'
                      />
                      <span className='ml-2'>All</span>
                    </label>
                    <label className='flex items-center'>
                      <input
                        type='radio'
                        value='completed'
                        checked={field.value === 'completed'}
                        onChange={() => field.onChange('completed')}
                        className='h-4 w-4 text-green-600 focus:ring-green-500'
                      />
                      <span className='ml-2'>Completed</span>
                    </label>
                    <label className='flex items-center'>
                      <input
                        type='radio'
                        value='not-completed'
                        checked={field.value === 'not-completed'}
                        onChange={() => field.onChange('not-completed')}
                        className='h-4 w-4 text-green-600 focus:ring-green-500'
                      />
                      <span className='ml-2'>Not Completed</span>
                    </label>
                  </>
                )}
              />
            </div>
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
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterForm;
