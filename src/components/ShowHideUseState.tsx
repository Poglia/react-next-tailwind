"use client";

import { useState } from "react";

const ShowHideUseState = () => {
  const [showSecret, setShowSecret] = useState(false);
  const handleClickButton = () => {
    setShowSecret(!showSecret)
  };

  return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <button
        onClick={handleClickButton}
        className="p-3 bg-blue-700 mb-5 rounded-md text-white"
      >
       {showSecret ? 'Ocultar Area Secreta' : 'Mostrar Area Secreta'}
      </button>
      {showSecret && <div className="p-3 bg-blue-300 rounded-r-md">Area Secreta</div>}
      
    </div>
  );
};

export default ShowHideUseState;
