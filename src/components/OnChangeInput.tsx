"use client";

import { useState } from "react";

const OnChangeInput = () => {
  const [nameInput, setNameInput] = useState("");
  const hancleBtnClick = () => {
    alert(nameInput)
  };

  return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nameInput}
        className="text-black rounded-md p-3 border border-black text-xl"
        onChange={e => setNameInput(e.target.value)}
      />
      <p>Seu nome é: {nameInput}</p>
      <button onClick={hancleBtnClick}>Mostrar valor do Campo</button>
    </div>
  );
};

export default OnChangeInput;
