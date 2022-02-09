import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--shape);
  width: 12rem;
  height: 21rem;
  border-radius: 8px;
  img {
    max-width: 10.93rem;
    max-height: 16.87rem;
    object-fit: cover;
    border-radius: 0.25rem;
    overflow: hidden;
  }
  h1 {
    font-size: 1.2rem;
  }
  span {
    font-size: 1rem;
    font-weight: 400;
  }
`;
