import { useContext, useState } from "react";
import ConfraternizationList from "../../components/ConfraternizationList";
import { ConfraternizationContext } from "../../providers/confraternization";
import { Container, MainContainer } from "./styles";
import Lottie from "react-lottie";
import animationData from "../../assets/animation/Beer.json";
import Menu from "../../components/Menu";

function Confraternization() {
  const { confraternizationList } = useContext(ConfraternizationContext);

  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <MainContainer>
      <Menu />
      <h1>Lista de Confraternização</h1>

      {confraternizationList.length === 0 ? (
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          speed={0.5}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      ) : null}
      <Container>
        {confraternizationList.map((product) => (
          <ConfraternizationList key={product.id} product={product} />
        ))}
      </Container>
    </MainContainer>
  );
}

export default Confraternization;
