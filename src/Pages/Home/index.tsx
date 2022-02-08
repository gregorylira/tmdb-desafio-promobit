import React, { useContext } from "react";
import { CardMovie } from "../../components/CardMovie";
import { Dashboard } from "../../components/Dashboard";
import { MoviesContext, useMovies } from "../../hook";

import { Content } from "./styles";

export function Home() {
  const { movies, trocarPagina } = useMovies();
  console.log(movies);

  return (
    <>
      <Dashboard />
      <Content>
        {movies.map((movie) => (
          <CardMovie
            title={movie.title}
            data={new Date(movie.release_date).toLocaleDateString()}
            imagem={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          />
        ))}
        <footer>
          <button onClick={() => trocarPagina(2)}>teste</button>
        </footer>
      </Content>
    </>
  );
}
