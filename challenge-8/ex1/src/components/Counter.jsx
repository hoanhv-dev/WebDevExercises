import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.initValue);

  const handleCountPlus = () => {
    setCount(count + 1);
  }

  const handleCountMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[120px] text-gray-800 mb-16">{count}</h1>

      <div className="flex space-x-10">
        <button
          onClick={handleCountMinus}
          className="w-50 h-50 bg-red-400 text-white rounded-xl shadow-lg hover:bg-red-500 transition-all duration-200 flex items-center justify-center text-3xl"
        >
          Minus
        </button>

        <button
          onClick={handleCountPlus}
          className="w-50 h-50 bg-green-400 text-white rounded-xl shadow-lg hover:bg-green-500 transition-all duration-200 flex items-center justify-center text-3xl"
        >
          Plus
        </button>
      </div>
    </div>
  );
};

export default Counter;
