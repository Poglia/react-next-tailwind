import { useContext } from "react";
import OnlineUsers from "./OnlineUsers";
import { CountContext } from "@/app/contexts/CountContext";

const Header = () => {
    const countCtx = useContext(CountContext);
    return (
        <header>
            <h1 className="text-3xl ">Titulo da Pagina ( {countCtx?.onlineCount})</h1>
            <OnlineUsers/>
        </header>
    )
}

export default Header;