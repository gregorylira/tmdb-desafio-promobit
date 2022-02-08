import { createContext, useContext, useEffect, useState } from "react";
import { MoviesContextData, MoviesContextDataProps } from "../model";
import { api } from "../service/api";

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

  async function getPagina() {
    return page;
  }

  return (
    <MoviesContext.Provider value={{ movies, trocarPagina, getPagina }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);

  return context;
}
