import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardMovie } from "../../components/CardMovie";
import { Dashboard } from "../../components/Dashboard";
import { useMovies } from "../../hook";

import { BackWhite, Content, Footer } from "./styles";

export function Home() {
  const { movies, trocarPagina, getPagina } = useMovies();
  const history = useHistory();
  const [countPage, setCountPage] = useState(1);

  async function handleClickNextPage() {
    const pagina = await getPagina();
    if (!pagina) {
      return 1;
    }
    setCountPage(pagina + 1);
    trocarPagina(pagina + 1);
  }

  async function handleClickPreviousPage() {
    const pagina = await getPagina();
    if (pagina === 1) {
      return 1;
    }
    setCountPage(pagina - 1);
    trocarPagina(pagina - 1);
  }

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
        {(movies.length > 19 || countPage >= 1) && (
          <div>
            {movies.length !== 0 && (
              <>
                <button onClick={handleClickPreviousPage}>Previous Page</button>
                <button onClick={handleClickNextPage}>Next Page</button>
              </>
            )}
          </div>
        )}
        {movies.length === 0 && (
          <div>
            <button onClick={handleClickPreviousPage}>Previous Page</button>
          </div>
        )}
      </Footer>
    </BackWhite>
  );
}
