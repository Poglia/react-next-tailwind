import { CountContext } from "@/app/contexts/CountContext";
import { useContext } from "react";

const OnlineUsers = () => {
  const handleBanAll = () => {
    countCtx?.setOnlineCount(0);
  };
  const countCtx = useContext(CountContext);
  return (
    <>
      <p>Online: {countCtx?.onlineCount}</p>
      <button onClick={handleBanAll}>Banir Todo mundo</button>
    </>
  );
};

export default OnlineUsers;
