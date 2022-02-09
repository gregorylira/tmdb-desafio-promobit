import { useState } from "react";
import { useMovies } from "../../hook";
import { Button, Container } from "./styles";

export function Filtro() {
  const { filtragem, active, setActive } = useMovies();

  function filtrarGenero(filter: number) {
    filtragem(filter.toString());
    if (active.find((item) => item === filter)) {
      setActive(active.filter((item) => item !== filter));
    } else {
      setActive([...active, filter]);
    }
  }

  return (
    <Container>
      <Button
        isActive={active.find((item) => item === 28) ? true : false}
        onClick={() => filtrarGenero(28)}
      >
        Ação
      </Button>
      <Button
        isActive={active.find((item) => item === 12) ? true : false}
        onClick={() => filtrarGenero(12)}
      >
        Aventura
      </Button>
      <Button
        isActive={active.find((item) => item === 16) ? true : false}
        onClick={() => filtrarGenero(16)}
      >
        Animação
      </Button>
      <Button
        isActive={active.find((item) => item === 35) ? true : false}
        onClick={() => filtrarGenero(35)}
      >
        Comédia
      </Button>
      <Button
        isActive={active.find((item) => item === 80) ? true : false}
        onClick={() => filtrarGenero(80)}
      >
        Crime
      </Button>
      <Button
        isActive={active.find((item) => item === 99) ? true : false}
        onClick={() => filtrarGenero(99)}
      >
        Documentário
      </Button>
      <Button
        isActive={active.find((item) => item === 18) ? true : false}
        onClick={() => filtrarGenero(18)}
      >
        Drama
      </Button>
      <Button
        isActive={active.find((item) => item === 10751) ? true : false}
        onClick={() => filtrarGenero(10751)}
      >
        Família
      </Button>
      <Button
        isActive={active.find((item) => item === 14) ? true : false}
        onClick={() => filtrarGenero(14)}
      >
        Fantasia
      </Button>
      <Button
        isActive={active.find((item) => item === 36) ? true : false}
        onClick={() => filtrarGenero(36)}
      >
        Historia
      </Button>
      <Button
        isActive={active.find((item) => item === 27) ? true : false}
        onClick={() => filtrarGenero(27)}
      >
        Terror
      </Button>
      <Button
        isActive={active.find((item) => item === 10402) ? true : false}
        onClick={() => filtrarGenero(10402)}
      >
        Música
      </Button>
      <Button
        isActive={active.find((item) => item === 9648) ? true : false}
        onClick={() => filtrarGenero(9648)}
      >
        Mistério
      </Button>
      <Button
        isActive={active.find((item) => item === 10749) ? true : false}
        onClick={() => filtrarGenero(10749)}
      >
        Romance
      </Button>
      <Button
        isActive={active.find((item) => item === 878) ? true : false}
        onClick={() => filtrarGenero(878)}
      >
        Ficção cientifica
      </Button>
      <Button
        isActive={active.find((item) => item === 10770) ? true : false}
        onClick={() => filtrarGenero(10770)}
      >
        Cinema TV
      </Button>
      <Button
        isActive={active.find((item) => item === 53) ? true : false}
        onClick={() => filtrarGenero(53)}
      >
        Thriller
      </Button>
      <Button
        isActive={active.find((item) => item === 10752) ? true : false}
        onClick={() => filtrarGenero(10752)}
      >
        Guerra
      </Button>
      <Button
        isActive={active.find((item) => item === 37) ? true : false}
        onClick={() => filtrarGenero(37)}
      >
        Faroeste
      </Button>
    </Container>
  );
}
