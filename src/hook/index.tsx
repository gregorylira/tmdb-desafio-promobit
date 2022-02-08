import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";

interface MoviesContextDataProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MoviesContextData {
  movies: MoviesContextDataProps[];
  trocarPagina: (pagina: number) => void;
}

export const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData
);

type MoviesContextProps = {
  children: React.ReactNode;
};

export function MoviesContextProvider({ children }: MoviesContextProps) {
  const [movies, setMovies] = useState<MoviesContextDataProps[]>([]);
  const [page, setPage] = useState(1);

  const API_KEY = process.env.REACT_APP_API_KEY_TMDB;

  async function getMovies() {
    await api
      .get(
        `movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=pt-BR&page=${page}`
      )
      .then((response) => {
        console.log(response.data.results);
        console.log(response.data.page);
        setMovies(response.data.results);
      });
  }

  useEffect(() => {
    getMovies();
  }, [page]);

  async function trocarPagina(pagina: number) {
    setPage(pagina);
  }

  return (
    <MoviesContext.Provider value={{ movies, trocarPagina }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);

  return context;
}
