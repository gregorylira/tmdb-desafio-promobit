import { Container } from "./styles";

interface CardProfileProps {
  name: string;
  profileImg: string;
  character: string;
}

export function CardProfile({ name, profileImg, character }: CardProfileProps) {
  return (
    <Container>
      <img src={profileImg} alt="profile image" />
      <h1>{name}</h1>
      <span>{character}</span>
    </Container>
  );
}
