"use client";

import {useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleClickButton = () => {
    setCount(count + 1);
  }

   return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleClickButton} className="p-3 bg-blue-700 rounded-md text-white">+1</button>
    </div>
  );
};

export default Counter;
