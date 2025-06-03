import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.initValue);

  const handleCount = (data) => {
    setCount((count) => count + data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[50px] text-gray-800 mb-16">{count}</h1>

      <div className="flex space-x-10">
        <button
          onClick={() => handleCount(-1)}
          className="w-200 h-200 p-4 bg-red-400 text-white rounded-xl shadow-lg hover:bg-red-500 transition-all duration-200 flex items-center justify-center text-3xl"
        >
          Minus
        </button>

        <button
          onClick={() => handleCount(+1)}
          className="w-200 h-200 p-4 bg-green-400 text-white rounded-xl shadow-lg hover:bg-green-500 transition-all duration-200 flex items-center justify-center text-3xl"
        >
          Plus
        </button>
      </div>
    </div>
  );
};

export default Counter;
