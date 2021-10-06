import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 200px;
  min-height: 350px;
  background: var(--brown);
  padding: 10px;
  border-radius: 8px;
  gap: 5px;

  img {
    height: 200px;
  }

  h3 {
    font-size: 1.8rem;
  }

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
