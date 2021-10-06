import { useHistory } from "react-router";
import { Container } from "./styles";
import { ImHome } from "react-icons/im";

function Menu() {
  const history = useHistory();

  return (
    <Container>
      <ImHome onClick={() => history.push("/")} />
      <p onClick={() => history.push("/wedding")}>Casamento</p>
      <p onClick={() => history.push("/graduation")}>Graduação</p>
      <p onClick={() => history.push("/confraternization")}>Confraternização</p>
    </Container>
  );
}

export default Menu;
