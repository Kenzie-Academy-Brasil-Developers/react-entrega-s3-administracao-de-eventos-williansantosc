import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Page = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 1.6rem;
  }

  svg {
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
