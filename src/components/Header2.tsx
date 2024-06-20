import { useContext } from "react";
import { LoggedUserContext } from "@/app/contexts/LoggedUser";

const Header2 = () => {
  const loggedUserCtx = useContext(LoggedUserContext);

  const handleLogout = () => {
    loggedUserCtx?.setName('');
  };
  return (
    <header>
      <h1 className="text-3xl">Titulo da Pagina</h1>
      {loggedUserCtx?.name && (
        <>
          <p>Usuario logado: {loggedUserCtx?.name}</p>
          <button onClick={handleLogout}>Sair</button>
        </>
      )}

      {!loggedUserCtx || loggedUserCtx?.name === '' &&
        <p>Usuario deslogado</p>
      }
    </header>
  );
};

export default Header2;
