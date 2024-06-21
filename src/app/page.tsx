"use client";

import { ButtonTheme } from "@/components/ButtonTheme";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const Page = () => {
  return (
    <ThemeProvider>
      <Container>
        <header className="py-5">
          <h1 className="text-3xl">Titulo da Pagina</h1>
        </header>
        <section>
          <p className="my-5">Conteudo da Página</p>
          <ButtonTheme label="Clique aqui" onClick={() => {}}/>
        </section>
        <ThemeSwitch/>
      </Container>
    </ThemeProvider>
  
  );
};

export default Page;
