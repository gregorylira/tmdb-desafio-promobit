import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardMovie } from "../../components/CardMovie";
import { Dashboard } from "../../components/Dashboard";
import { Pagination } from "../../components/Pagination";
import { useMovies } from "../../hook";

import { BackWhite, Content, Footer } from "./styles";

export function Home() {
  const { movies, trocarPagina, maxPages } = useMovies();
  const history = useHistory();
  const [countPage, setCountPage] = useState(1);

  const setOffset = (offset: number) => {
    window.scrollTo(0, 0);
    setCountPage(offset);
    if (offset) {
      trocarPagina(offset / 10);
    } else {
      trocarPagina(1);
    }
    console.log(offset);
  };

  return (
    <BackWhite>
      <Dashboard />
      <Content>
        {movies.map((movie) => {
          if (!movie.backdrop_path) {
            return <></>;
          }
          return (
            <CardMovie
              key={movie.id}
              title={movie.title}
              onClick={() => {
                history.push(`/movie/${movie.id}`);
              }}
              data={new Date(movie.release_date).toLocaleDateString()}
              movieImagem={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            />
          );
        })}
      </Content>
      <Footer>
        <Pagination
          limit={20}
          total={maxPages}
          offset={countPage}
          setOffset={setOffset}
        />
      </Footer>
    </BackWhite>
  );
}
