"use client"

import { useState } from "react";

const StateUpdater = () => {
  const [count, setCount] = useState<number>(0);

  const handleBtnClick = () => {
    setCount(count + 2);
    setCount((c) => c + 2);
    setCount((c) => c + 2);
  };

  return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button
        className="bg-blue-700 text-white p-3 rounded-md"
        onClick={handleBtnClick}
      >
        +6
      </button>
    </div>
  );
};

export default StateUpdater;
