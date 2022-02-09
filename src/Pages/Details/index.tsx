import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import filmeImg from "../../assets/filme.jpg";
import avaliacaoImg from "../../assets/avaliacao.svg";
import { api } from "../../service/api";

import { Container, Content, Elenco } from "./styles";
import { Participante } from "../../components/Participantes";
import { useEffect, useState } from "react";

type DetailsParams = {
  id: string;
};

interface MoviesDetailsProps {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  overview: string;
  runtime: number;
}

interface ParticipanteProps {
  id: number;
  cast: [
    {
      id: number;
      name: string;
      known_for_department: string;
      profile_path: string;
      character: string;
    }
  ];
  crew: [
    {
      id: number;
      known_for_department: string;
      name: string;
    }
  ];
}

export function Details() {
  const id = useParams<DetailsParams>();
  const [moviesDetails, setMoviesDetails] = useState<MoviesDetailsProps>(
    {} as MoviesDetailsProps
  );
  const [participantes, setParticipantes] = useState<ParticipanteProps>(
    {} as ParticipanteProps
  );

  async function getMoviesDetails() {
    await api
      .get(
        `movie/${id.id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=pt-BR`
      )
      .then((response) => {
        console.log(response);

        setMoviesDetails(response.data);
      });

    getParticipantes();
  }

  async function getParticipantes() {
    await api
      .get(
        `movie/${id.id}/credits?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=pt-BR`
      )
      .then((response) => {
        setParticipantes(response.data);
      });
  }

  function getfiveParticipantes() {
    if (!participantes.cast) {
      return [];
    }
    if (participantes.cast.length > 5) {
      return participantes.cast.slice(0, 5);
    }
    return;
  }
  function getfiveParticipantesDepartament() {
    if (!participantes.crew) {
      return [];
    }
    if (participantes.crew.length > 5) {
      return participantes.crew.slice(0, 5);
    }
    return;
  }

  function getGenres() {
    if (!moviesDetails.genres) {
      return;
    }
    const genres = moviesDetails.genres.map((genre, index) => {
      if (index === moviesDetails.genres.length - 1) {
        return genre.name;
      }

      return " " + genre.name + ", ";
    });

    const genresString = genres.join("");

    return genresString;
  }

  useEffect(() => {
    getMoviesDetails();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <img
          className="banner"
          src={`https://image.tmdb.org/t/p/w500/${moviesDetails.poster_path}`}
          alt="logo"
        />
        <Content>
          <h1>{moviesDetails.title}</h1>
          <span>
            16 anos •{" "}
            {new Date(moviesDetails.release_date).toLocaleDateString()} (BR) •{" "}
            {getGenres()} • {moviesDetails.runtime} minutes
          </span>
          <div className="avaliacao-usuario">
            <img src={avaliacaoImg} alt="avaliação do usuario" />
            <span>avaliação dos usuarios</span>
          </div>
          <h3>Sinopse</h3>
          <span className="sinopse">{moviesDetails.overview}</span>

          <div className="participantes">
            {getfiveParticipantes()?.map((participante) => (
              <Participante
                key={participante.id}
                name={participante.name}
                role={participante.known_for_department}
              />
            ))}
            {getfiveParticipantesDepartament()?.map((participante) => (
              <Participante
                key={participante.id}
                name={participante.name}
                role={participante.known_for_department}
              />
            ))}
          </div>
        </Content>
        <Elenco></Elenco>
      </Container>
    </>
  );
}
