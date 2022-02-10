import styled, { css } from "styled-components";

interface ContainerProps {
  small?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  /* max-height: 22rem;
  max-width: 11rem; */
  cursor: pointer;

  ${(props) =>
    props.small
      ? css`
          div {
            img {
              height: 264px;
              object-fit: cover;
              border-radius: 0.25rem;
            }
          }
        `
      : css`
          div {
            height: 264px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 0.25rem;
            }
          }
        `}

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
