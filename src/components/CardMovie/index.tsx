import React from "react";
import { Container } from "./styles";
import filmeImage from "../../assets/filme.jpg";

interface CardMovieProps {
  title: string;
  data: string;
  imagem: string;
  onClick: () => void;
}

export function CardMovie({ title, data, imagem, onClick }: CardMovieProps) {
  return (
    <Container onClick={onClick}>
      <img src={imagem} alt="logo" />
      <span className="title">{title}</span>
      <span className="data">{data}</span>
    </Container>
  );
}
