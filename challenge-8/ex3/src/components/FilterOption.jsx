import { useState } from "react";

const FilterOption = ({ onClose, onFilterChange }) => {
  const [filterValue, setFilterValue] = useState("all");

  const handleSelectChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleApply = () => {
    if (onFilterChange) {
      onFilterChange(filterValue);
    }
    onClose();
  };

  return (
    <div
      id="filter-options"
      className="bg-white p-4 rounded-xl shadow-lg absolute left-1/2 top-40 transform -translate-x-1/2 w-96 flex-col gap-4"
    >
      <label className="block mb-2 text-green-900 font-bold">Filter by:</label>
      <select
        id="filter-select"
        className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
        value={filterValue}
        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        <option value="complete">Completed</option>
        <option value="not-complete">Not Completed</option>
      </select>
      <button
        id="apply-filter-button"
        onClick={handleApply}
        className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500"
      >
        Apply
      </button>
      <button
        id="close-filter-button"
        onClick={onClose}
        className="absolute top-3 right-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mb-2 text-[10px]"
      >
        X
      </button>
    </div>
  );
};

export default FilterOption;
