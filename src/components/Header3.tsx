import { PostContext } from "@/app/contexts/PostContext";
import { useContext, useState } from "react";

const Header3 = () => {
  const postCtx = useContext(PostContext);

  const [titleInput, setTitleInput] = useState("");
  const [bodyinput, setBodyInput] = useState("");

  const handleAddButton = () => {
    if(titleInput && bodyinput)
      {
        postCtx?.dispatch({ type: "add", payload: { title: titleInput, body: bodyinput } });
        setBodyInput('');
        setTitleInput('');
      }
  };

  return (
    <header>
      <h1 className="text-3xl">Titulo da Pagina</h1>
      <div className=" max-w-xl gap-3 flex flex-col border border-dotted border-gray-400 p-3 my-4">
        <input
          type="text"
          placeholder="Digite um titulo"
          className="border border-gray-300 p-2 text-black"
          onChange={(e) => setTitleInput(e.target.value)}
          value={titleInput}
        />
        <textarea
          placeholder="Digite um texto"
          name=""
          id=""
          className="border border-gray-300 p-2 h-24 text-black"
          onChange={(e) => setBodyInput(e.target.value)}
          value={bodyinput}
        ></textarea>
        <button onClick={handleAddButton} className="bg-blue-500 p-3 text-white rounded-md">
          Adicionar
        </button>
      </div>
    </header>
  );
};

export default Header3;
