import React, { useContext } from "react";
import { CardMovie } from "../../components/CardMovie";
import { Dashboard } from "../../components/Dashboard";
import { MoviesContext, useMovies } from "../../hook";

import { Content, Footer } from "./styles";

export function Home() {
  const { movies, trocarPagina, getPagina } = useMovies();
  // console.log(movies);

  async function handleClickNextPage() {
    const pagina = await getPagina();
    if (!pagina) {
      return 1;
    }
    trocarPagina(pagina + 1);
  }

  async function handleClickPreviousPage() {
    const pagina = await getPagina();
    if (pagina === 1) {
      return 1;
    }
    trocarPagina(pagina - 1);
  }

  return (
    <>
      <Dashboard />
      <Content>
        {movies.map((movie) => {
          if (!movie.backdrop_path) {
            return;
          }
          return (
            <CardMovie
              key={movie.id}
              title={movie.title}
              data={new Date(movie.release_date).toLocaleDateString()}
              imagem={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            />
          );
        })}
      </Content>
      <Footer>
        <div>
          <button onClick={handleClickPreviousPage}>Previous Page</button>
          <button onClick={handleClickNextPage}>Next Page</button>
        </div>
      </Footer>
    </>
  );
}
