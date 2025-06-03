const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-between items-end mt-4 p-2">
      <button
        onClick={handlePrev}
        className="bg-green-200 rounded-xl w-20 h-10 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105"
        disabled={currentPage === 1}
      >
        <p className="text-green-900 font-semibold text-xl">Prev</p>
      </button>

      <div className="text-center text-green-800 font-semibold mt-4">
        Page {currentPage} / {totalPages}
      </div>

      <button
        onClick={handleNext}
        className="bg-green-200 rounded-xl w-20 h-10 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105"
        disabled={currentPage === totalPages}
      >
        <p className="text-green-900 font-semibold text-xl">Next</p>
      </button>
    </div>
  );
};

export default Pagination;
