import { createContext, useContext, useEffect, useState } from "react";
import { MoviesContextData, MoviesContextDataProps } from "../model";
import { api } from "../service/api";

export const MoviesContext = createContext<MoviesContextData>(
  {} as MoviesContextData
);

type MoviesContextProps = {
  children: React.ReactNode;
};

type filterProps = {
  filterType: number;
  filter: boolean;
};

export function MoviesContextProvider({ children }: MoviesContextProps) {
  const [movies, setMovies] = useState<MoviesContextDataProps[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<filterProps>({
    filterType: 0,
    filter: false,
  });

  const API_KEY = process.env.REACT_APP_API_KEY_TMDB;

  async function getMovies() {
    if (!filter.filter) {
      await api
        .get(`movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)
        .then((response) => {
          console.log(response.data.results);
          console.log(response.data.page);
          setMovies(response.data.results);
        });
    } else {
      console.log(filter.filter);
      await api
        .get(
          `discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${filter.filterType}&with_watch_monetization_types=flatrate`
        )
        .then((response) => {
          console.log(response.data.results);
          console.log(response.data.page);
          setMovies(response.data.results);
        });
    }
  }

  useEffect(() => {
    getMovies();
  }, [page, filter]);

  async function filtragem(filterType: number) {
    if (filterType === filter.filterType) {
      setFilter({
        filterType: 0,
        filter: false,
      });
    } else {
      setFilter({
        filterType,
        filter: true,
      });
    }
    setPage(1);
  }

  async function trocarPagina(pagina: number) {
    setPage(pagina);
  }

  async function getPagina() {
    return page;
  }

  return (
    <MoviesContext.Provider
      value={{ movies, trocarPagina, getPagina, filtragem }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);

  return context;
}
