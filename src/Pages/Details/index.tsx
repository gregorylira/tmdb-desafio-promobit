import { useHistory, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import avaliacaoImg from "../../assets/avaliacao.svg";
import { api } from "../../service/api";

import { Container, Content, Elenco, Recomendacoes, Trailer } from "./styles";
import { Participante } from "../../components/Participantes";
import { useEffect, useState } from "react";
import { CardProfile } from "../../components/CardProfile";
import { CardMovie } from "../../components/CardMovie";

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

interface TrailerProps {
  id: number;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

interface RecomendacoesProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export function Details() {
  const id = useParams<DetailsParams>();
  const [moviesDetails, setMoviesDetails] = useState<MoviesDetailsProps>(
    {} as MoviesDetailsProps
  );
  const [participantes, setParticipantes] = useState<ParticipanteProps>(
    {} as ParticipanteProps
  );
  const history = useHistory();
  const [stack, setStack] = useState(0);

  const [trailer, setTrailer] = useState<TrailerProps[]>([]);

  const [recomendacoes, setRecomendacoes] = useState<RecomendacoesProps[]>([]);

  async function getMoviesDetails() {
    await api
      .get(
        `movie/${id.id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=pt-BR`
      )
      .then((response) => {
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
  async function getRecomendacoes(): Promise<void | RecomendacoesProps[]> {
    // https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1
    await api
      .get(
        `movie/${id.id}/recommendations?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=pt-BR&page=1`
      )
      .then((response) => {
        setRecomendacoes(response.data.results);
      });
  }

  async function getMovieTrailer() {
    await api
      .get(
        `movie/${id.id}/videos?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=pt-BR`
      )
      .then((response) => {
        const movieTrailer = response.data.results.filter(
          (item: TrailerProps) => item.type === "Trailer"
        );
        setTrailer(movieTrailer);
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
    window.scrollTo(0, 0);
    getMoviesDetails();
    getRecomendacoes();
    getMovieTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stack]);

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
      </Container>
      <Elenco>
        <h2>Elenco</h2>
        <div className="elencos">
          {participantes.cast?.map((participante) => (
            <CardProfile
              key={participante.id}
              name={participante.name}
              character={participante.character}
              profileImg={
                participante.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${participante.profile_path}`
                  : ""
              }
            />
          ))}
        </div>
      </Elenco>
      <Trailer>
        <h2>Trailer</h2>
        <iframe
          title="trailer"
          src={`https://www.youtube.com/embed/${trailer[0]?.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Trailer>
      <Recomendacoes>
        <h2>Recomendações</h2>
        <div className="recomendacoes">
          {recomendacoes.map((recomendacao: RecomendacoesProps) => (
            <CardMovie
              key={recomendacao.id}
              title={recomendacao.title}
              movieImagem={
                recomendacao.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${recomendacao.poster_path}`
                  : ""
              }
              onClick={() => {
                history.push(`/movie/${recomendacao.id}`);
                setStack(stack + 1);
              }}
              data={new Date(recomendacao.release_date).toLocaleDateString()}
              small
            />
          ))}
        </div>
      </Recomendacoes>
    </>
  );
}
