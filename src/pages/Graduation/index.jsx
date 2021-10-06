import { useContext, useState } from "react";
import GraduationList from "../../components/GraduationList";
import { GraduationContext } from "../../providers/graduation";
import { Container, MainContainer } from "./styles";
import Lottie from "react-lottie";
import animationData from "../../assets/animation/Beer.json";
import Menu from "../../components/Menu";

function Graduation() {
  const { graduationList } = useContext(GraduationContext);

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
      <h1>Lista de Graduação</h1>
      {graduationList.length === 0 ? (
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
        {graduationList.map((product) => (
          <GraduationList key={product.id} product={product} />
        ))}
      </Container>
    </MainContainer>
  );
}

export default Graduation;
