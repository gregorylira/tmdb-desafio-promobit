import { Container } from "./styles";

interface CardMovieProps {
  title: string;
  data: string;
  movieImagem: string;
  onClick?: () => void;
}

export function CardMovie({
  title,
  data,
  movieImagem,
  onClick,
}: CardMovieProps) {
  return (
    <Container onClick={onClick}>
      <img src={movieImagem} alt="logo" />
      <span className="title">{title}</span>
      <span className="data">{data}</span>
    </Container>
  );
}
