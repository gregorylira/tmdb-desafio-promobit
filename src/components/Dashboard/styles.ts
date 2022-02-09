import styled from "styled-components";

export const Container = styled.div`
  background: var(--purple);
  height: 24rem;

  @media (max-width: 600px) {
    height: 34rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 981px;
  height: 280px;
  margin: 0 auto;
  color: var(--shape);
  h1 {
    max-width: 781px;
    padding: 5.31rem 1rem 2.5rem 1rem;
    text-align: center;
  }
  span {
    margin: 0 auto;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 0.87rem;
    }
  }
`;
