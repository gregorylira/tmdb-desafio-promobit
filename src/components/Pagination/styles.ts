import styled, { css } from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  gap: 10px;
  button {
    border-radius: 0.25rem;
    border: none;
    background: var(--purple-light);
    padding: 10px;
    margin-bottom: 2rem;
  }

  @media (max-width: 500px) {
    gap: 5px;

    button {
      padding: 5px;
    }
  }
`;

type LiProps = {
  isActive: boolean;
};

export const Li = styled.li<LiProps>`
  button {
    ${(props) =>
      props.isActive &&
      css`
        background: var(--orange);
      `}
  }
`;
