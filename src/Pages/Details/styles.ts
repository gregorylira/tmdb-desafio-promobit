import styled from "styled-components";

export const Container = styled.div`
  background: var(--purple);
  height: 37.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  .banner {
    object-fit: cover;
    width: 23.93rem;
    height: 35.87rem;
    border-radius: 8px;
    margin-left: 112px;
    margin-top: 72px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
    padding-bottom: 40px;

    .banner {
      width: 50%;
      height: 50%;
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  max-width: 43.5rem;
  flex-direction: column;
  color: var(--shape);
  margin: 90px 2rem 0 2rem;
  gap: 1rem;

  .avaliacao-usuario {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 165px;
    height: 3.8rem;

    @media (max-width: 750px) {
      width: 120px;
      height: 3.8rem;
    }

    img {
    }
    span {
      font-size: 1rem;
      font-weight: 400;
    }
  }
  h1 {
    display: flex;
    font-size: 2rem;
    text-align: center;
  }
  h3 {
    font-size: 1.25rem;
  }

  .sinopse {
    font-size: 1rem;
    font-weight: 400;
  }

  .participantes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const Elenco = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.75rem 0 2rem 7rem;
  h2 {
    margin-bottom: 2rem;
  }
  .elencos {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow: scroll;
  }
  @media (max-width: 1000px) {
    margin: 20px;
    max-width: 100%;
  }
`;

export const Trailer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.75rem 0 2rem 7rem;
  iframe {
    margin-top: 2rem;
    width: 40.87rem;
    height: 23.93rem;
  }
  @media (max-width: 700px) {
    margin: 20px;
    max-width: 100%;
    iframe {
      margin-top: 2rem;
      width: 90%;
      height: 20rem;
    }
  }
`;

export const Recomendacoes = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.75rem 0 2rem 7rem;
  .recomendacoes {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow: auto;
    overflow-y: hidden;
  }
  @media (max-width: 1000px) {
    margin: 20px;
    max-width: 100%;
  }
`;
