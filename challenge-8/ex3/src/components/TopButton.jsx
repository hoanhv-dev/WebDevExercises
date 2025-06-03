const TopButton = ({ onAddClick, onFilterClick }) => {
  return (
    <div className="flex gap-4 items-end justify-between mt-5">
      <button
        id="add-task-button"
        className="bg-green-200 rounded-xl w-40 h-40 flex flex-col items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105"
        onClick={onAddClick}
      >
        <p className="text-green-900 text-2xl font-semibold">Add a task</p>
        <span className="text-7xl text-pink-500">+</span>
      </button>
      <button
        id="filter-button"
        onClick={onFilterClick}
        className="bg-green-200 rounded-xl w-30 h-15 flex flex-col items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105"
      >
        <p className="text-green-900 text-2xl font-semibold">Filter</p>
      </button>
    </div>
  );
};

export default TopButton;
