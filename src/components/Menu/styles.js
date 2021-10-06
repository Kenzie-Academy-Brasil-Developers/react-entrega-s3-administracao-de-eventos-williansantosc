import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--mustache);
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: 0px 8px 20px 2px var(--yellow);
  z-index: 2;

  p {
    font-weight: bold;
    font-size: 1.8rem;
    cursor: pointer;
  }

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
