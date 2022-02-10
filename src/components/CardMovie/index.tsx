import { Container } from "./styles";

interface CardMovieProps {
  title: string;
  data: string;
  movieImagem: string;
  onClick?: () => void;
  small?: boolean;
}

export function CardMovie({
  title,
  data,
  movieImagem,
  onClick,
  small,
}: CardMovieProps) {
  return (
    <Container onClick={onClick} small={small}>
      <div>
        <img src={movieImagem} alt="logo" />
      </div>
      <span className="title">{title}</span>
      <span className="data">{data}</span>
    </Container>
  );
}
