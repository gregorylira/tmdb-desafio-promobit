import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 12px;
  margin-top: 1rem;
  justify-content: center;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;

    &:hover {
      background: var(--orange);
      color: var(--shape);
    }
  }
`;

type ButtonProps = {
  isActive: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: ${(props) => (props.isActive ? "var(--orange)" : "var(--shape)")};

  &:hover {
    background: var(--orange);
    color: var(--shape);
  }
`;
