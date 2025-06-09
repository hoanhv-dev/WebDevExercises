import { CloseForm } from '@features/Home/types/task';
import { useState } from 'react';

interface FilterFormProps extends CloseForm {
  onApply: (filters: { completed: boolean | null }) => void;
  onClose: () => void;
};

const FilterForm = ({ onApply, onClose }: FilterFormProps) => {
  const [completed, setCompleted] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply({ completed });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Filter Tasks</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  checked={completed === null}
                  onChange={() => setCompleted(null)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2">All</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  checked={completed === true}
                  onChange={() => setCompleted(true)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2">Completed</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  checked={completed === false}
                  onChange={() => setCompleted(false)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2">Not Completed</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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