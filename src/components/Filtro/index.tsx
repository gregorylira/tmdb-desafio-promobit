import { useState } from "react";
import { useMovies } from "../../hook";
import { Button, Container } from "./styles";

export function Filtro() {
  const { filtragem } = useMovies();
  const [active, setActive] = useState(0);

  function filtrarGenero(filter: number) {
    filtragem(filter);
    setActive(filter);
  }

  return (
    <Container>
      <Button isActive={active === 28} onClick={() => filtrarGenero(28)}>
        Ação
      </Button>
      <Button isActive={active === 12} onClick={() => filtrarGenero(12)}>
        Aventura
      </Button>
      <Button isActive={active === 16} onClick={() => filtrarGenero(16)}>
        Animação
      </Button>
      <Button isActive={active === 35} onClick={() => filtrarGenero(35)}>
        Comédia
      </Button>
      <Button isActive={active === 80} onClick={() => filtrarGenero(80)}>
        Crime
      </Button>
      <Button isActive={active === 99} onClick={() => filtrarGenero(99)}>
        Documentário
      </Button>
      <Button isActive={active === 18} onClick={() => filtrarGenero(18)}>
        Drama
      </Button>
      <Button isActive={active === 10751} onClick={() => filtrarGenero(10751)}>
        Família
      </Button>
      <Button isActive={active === 14} onClick={() => filtrarGenero(14)}>
        Fantasia
      </Button>
      <Button isActive={active === 36} onClick={() => filtrarGenero(36)}>
        Historia
      </Button>
      <Button isActive={active === 27} onClick={() => filtrarGenero(27)}>
        Terror
      </Button>
      <Button isActive={active === 10402} onClick={() => filtrarGenero(10402)}>
        Música
      </Button>
      <Button isActive={active === 9648} onClick={() => filtrarGenero(9648)}>
        Mistério
      </Button>
      <Button isActive={active === 10749} onClick={() => filtrarGenero(10749)}>
        Romance
      </Button>
      <Button isActive={active === 878} onClick={() => filtrarGenero(878)}>
        Ficção cientifica
      </Button>
      <Button isActive={active === 10770} onClick={() => filtrarGenero(10770)}>
        Cinema TV
      </Button>
      <Button isActive={active === 53} onClick={() => filtrarGenero(53)}>
        Thriller
      </Button>
      <Button isActive={active === 10752} onClick={() => filtrarGenero(10752)}>
        Guerra
      </Button>
      <Button isActive={active === 37} onClick={() => filtrarGenero(37)}>
        Faroeste
      </Button>
    </Container>
  );
}
