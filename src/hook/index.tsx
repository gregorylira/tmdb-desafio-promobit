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
  filterType: string[];
  filter: boolean;
};

export function MoviesContextProvider({ children }: MoviesContextProps) {
  const [active, setActive] = useState([0]);
  const [movies, setMovies] = useState<MoviesContextDataProps[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<filterProps>({
    filterType: [],
    filter: false,
  });

  async function getMovies() {
    if (!filter.filter) {
      await api
        .get(
          `movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=pt-BR&page=${page}`
        )
        .then((response) => {
          setMovies(response.data.results);
        });
    } else {
      await api
        .get(
          `discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${filter.filterType}&with_watch_monetization_types=flatrate`
        )
        .then((response) => {
          setMovies(response.data.results);
        });
    }
  }

  useEffect(() => {
    getMovies();
  }, [page, filter]);

  async function filtragem(filterTypes: string) {
    if (filter.filterType.find((genre) => genre === filterTypes)) {
      console.log(filter.filterType);
      setFilter({
        filterType: filter.filterType.filter((item) => item !== filterTypes),
        filter: filter.filterType.length > 0,
      });
    } else {
      setFilter({
        filterType: [...filter.filterType, filterTypes],
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
      value={{ movies, trocarPagina, getPagina, filtragem, active, setActive }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);

  return context;
}
