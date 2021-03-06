export interface MoviesContextDataProps {
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

export interface MoviesContextData {
  movies: MoviesContextDataProps[];
  trocarPagina: (pagina: number) => void;
  getPagina: () => Promise<number>;
  filtragem: (filtro: string) => Promise<void>;
  active: number[];
  setActive: React.Dispatch<React.SetStateAction<number[]>>;
  maxPages: number;
}
