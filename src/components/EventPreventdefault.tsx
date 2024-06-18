"use client";

import { FormEvent } from "react";

const EventPreventdefault = () => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Opa mandando...");
  }
   return (
    <div className="container w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-3">Form de Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export default EventPreventdefault;
