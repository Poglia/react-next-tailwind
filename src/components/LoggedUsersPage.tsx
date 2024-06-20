"use client";

import Header2 from "@/components/Header2";
import { LoggedUserProvider } from "../app/contexts/LoggedUser";

const LoggedUsersPage = () => {
  return (
    <div className="container mx-auto flex justify-center">
      <LoggedUserProvider>
        <Header2/>
      </LoggedUserProvider>
    </div>
  );
};

export default LoggedUsersPage;
