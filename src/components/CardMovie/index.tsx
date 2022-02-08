import React from "react";
import { Container } from "./styles";
import filmeImage from "../../assets/filme.jpg";

interface CardMovieProps {
  title: string;
  data: string;
  imagem: string;
}

export function CardMovie({ title, data, imagem }: CardMovieProps) {
  return (
    <Container>
      <img src={imagem} alt="logo" />
      <span className="title">{title}</span>
      <span className="data">{data}</span>
    </Container>
  );
}
