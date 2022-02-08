import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1024px;
  max-width: 975px;
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
