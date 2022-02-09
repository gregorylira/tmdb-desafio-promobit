import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1440px;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  div {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px;

    button {
      background: var(--purple-light);
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        background: var(--purple);
        color: var(--background);
      }
    }
  }
`;
