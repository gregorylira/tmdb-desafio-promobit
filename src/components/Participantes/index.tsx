import { Container } from "./styles";

interface ParticipantesProps {
  name: string;
  role: string;
}

export function Participante({ name, role }: ParticipantesProps) {
  return (
    <Container>
      <h3>{name}</h3>
      <span>{role}</span>
    </Container>
  );
}
