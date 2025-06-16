type PaginationType = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationType> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='flex justify-between items-end mt-4 p-2'>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className='bg-green-200 rounded-xl w-20 h-10 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        <p className='text-green-900 font-semibold text-xl'>Prev</p>
      </button>

      <div className='text-center text-green-800 font-semibold mt-4'>
        Page {currentPage} / {totalPages}
      </div>

      <button
        className='bg-green-200 rounded-xl w-20 h-10 flex items-center justify-center shadow-md cursor-pointer transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <p className='text-green-900 font-semibold text-xl'>Next</p>
      </button>
    </div>
  );
};

export default Pagination;
