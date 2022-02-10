import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 22rem;
  max-width: 11rem; */
  cursor: pointer;

  div {
    height: 264px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.25rem;
    }
  }
  .title {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
  .data {
    font-size: 0, 87rem;
    font-weight: bold;
    color: var(--text-body);
  }

  :hover {
    transform: scale(1.05);
  }
`;
