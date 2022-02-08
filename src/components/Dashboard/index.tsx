import React from "react";
import { Filtro } from "../Filtro";
import { Header } from "../Header";
import { Container, Content } from "./styles";

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </h1>
          <div>
            <span>FILTRE POR:</span>
          </div>
          <Filtro />
        </Content>
      </Container>
    </>
  );
}
