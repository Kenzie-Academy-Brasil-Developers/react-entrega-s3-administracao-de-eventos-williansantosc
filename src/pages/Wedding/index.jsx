import { useContext, useState } from "react";
import WeddingList from "../../components/WeddingList";
import { WeddingContext } from "../../providers/wedding";
import { Container, MainContainer } from "./styles";
import Menu from "../../components/Menu";
import Lottie from "react-lottie";
import animationData from "../../assets/animation/Beer.json";

function Wedding() {
  const { weddingList } = useContext(WeddingContext);

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
      <h1>Lista de Casamento</h1>
      {weddingList.length === 0 ? (
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
        {weddingList.map((product) => (
          <WeddingList key={product.id} product={product} />
        ))}
      </Container>
    </MainContainer>
  );
}

export default Wedding;
