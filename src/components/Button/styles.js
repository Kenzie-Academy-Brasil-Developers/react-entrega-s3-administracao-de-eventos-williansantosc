import styled from "styled-components";

export const Container = styled.button`
  border-color: var(--black);
  border-radius: 8px;
  font-size: 1.4rem;
  padding: 2px;
  font-weight: bold;
  color: var(--yellow);
  background-image: -webkit-linear-gradient(
    45deg,
    var(--black) 50%,
    transparent 50%
  );
  background-image: linear-gradient(45deg, var(--black) 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
  :hover {
    background-position: 0;
    border-color: var(--mustache);
  }
  :active {
    transform: translateY(3px);
  }
  width: 100%;
`;
