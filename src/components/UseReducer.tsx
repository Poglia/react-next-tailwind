"use client";

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";

const UseReducer = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState("");

  const handleAddButton = () => {
    if (addField.trim() === "") return false;

    dispatch({
      type: "add",
      payload: { text: addField.trim() },
    });

    setAddField("");
  };

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id },
    });
  };

  const handleEdit = (id: number) => {
    const item = list.find((it) => it.id === id);
    if (!item) return false;

    const newText = window.prompt("Editar Tarefa", item.text);
    if (!newText || newText.trim() === "") return false;

    dispatch({
      type: "editText",
      payload: {
        id,
        newText,
      },
    });
  };

  const handleRemove = (id: number) => {
    if(!window.confirm("Tem certeza que deseja excluir?")) return false;
    dispatch({
      type: "remove",
      payload: { id },
    });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de Tarefas </h1>
      <div className="max-w-2xl mx-auto flex rounded-md border border-gray-400 p-4 my-4 bg-gray-950">
        <input
          type="text"
          className=" flex-1 border rounded-md border-white p-3 bg-transparent text-white outline-none"
          placeholder="Digite um item"
          value={addField}
          onChange={(e) => setAddField(e.target.value)}
        />
        <button onClick={handleAddButton} className="p-4 ">
          ADICIONAR
        </button>
      </div>
      <ul className="max-w-2xl mx-auto">
        {list.map((item) => (
          <li
            key={item.id}
            className="flex p-3 my-3 border-b border-gray-700 items-center"
          >
            <input
              type="checkbox"
              className="w-5 h-5 mr-4"
              defaultChecked={item.done}
              onClick={() => handleDoneCheckbox(item.id)}
            />
            <p className="text-lg flex-1">{item.text}</p>
            <button
              onClick={() => handleEdit(item.id)}
              className="mx-4 hover:text-gray-500"
            >
              Editar
            </button>
            <button
              className="mx-4 hover:text-gray-500"
              onClick={() => handleRemove(item.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
