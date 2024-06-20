"use client";

import Header from "@/components/Header";
import { CountProvider } from "../app/contexts/CountContext";

const OnlineUsersPage = () => {
  return (
    <div className="container mx-auto flex justify-center">
      <CountProvider>
        <Header />
      </CountProvider>
    </div>
  );
};

export default OnlineUsersPage;
