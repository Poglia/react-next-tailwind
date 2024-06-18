"use client";

import { Person2 } from "@/types/Person2";
import { useState } from "react";

const UseStateWithObject = () => {
  const handleClearName = () => {
    setFullName({ ...fullName, name: "" });
  };

  const [fullName, setFullName] = useState<Person2>({
    name: "Pedro",
    lastName: "Poglia",
  });
  return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input
        type="text"
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.name}
        onChange={(e) => setFullName({ ...fullName, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
      />
      <p>Meu nome completo é:</p>
      <p>
        {fullName.name} {fullName.lastName}
      </p>
      <button
        className="p-3 bg-blue-700 rounded-md mt-3 text-white"
        onClick={handleClearName}
      >
        Limpar Nome
      </button>
    </div>
  );
};

export default UseStateWithObject;
