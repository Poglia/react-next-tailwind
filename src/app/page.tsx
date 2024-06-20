"use client";

import Header from "@/components/Header";
import { CountProvider } from "./contexts/CountContext";

const Page = () => {
  return (
    <div className="container mx-auto flex justify-center">
      <CountProvider>
        <Header />
      </CountProvider>
    </div>
  );
};

export default Page;
