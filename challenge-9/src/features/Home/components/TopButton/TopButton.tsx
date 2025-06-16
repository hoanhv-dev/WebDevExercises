type TopButtonProps = {
  onAddClick: () => void;
  onFilterClick: () => void;
};

const TopButton = ({ onAddClick, onFilterClick }: TopButtonProps) => {
  return (
    <div className='flex gap-4 items-end justify-between mt-5'>
      <button
        id='add-task-button'
        onClick={onAddClick}
        className='bg-green-200 rounded-xl w-40 h-40 flex flex-col items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500'
        aria-label='Add a new task'
      >
        <p className='text-green-900 text-2xl font-semibold'>Add a task</p>
        <span className='text-7xl text-pink-500' aria-hidden='true'>
          +
        </span>
      </button>
      <button
        id='filter-button'
        onClick={onFilterClick}
        className='bg-green-200 rounded-xl w-32 h-16 flex flex-col items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500'
        aria-label='Filter tasks'
      >
        <p className='text-green-900 text-2xl font-semibold'>Filter</p>
      </button>
    </div>
  );
};

export default TopButton;
