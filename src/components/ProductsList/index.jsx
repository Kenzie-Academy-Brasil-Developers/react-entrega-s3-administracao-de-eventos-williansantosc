import Button from "../Button";
import { Card } from "./styles";
import { WeddingContext } from "../../providers/wedding";
import { useContext } from "react";
import { motion } from "framer-motion";
import { GraduationContext } from "../../providers/graduation";
import { ConfraternizationContext } from "../../providers/confraternization";

function ProductsList({ product }) {
  const { addToWeddingList } = useContext(WeddingContext);

  const { addToGraduationList } = useContext(GraduationContext);

  const { addToConfraternizationList } = useContext(ConfraternizationContext);

  const {
    id,
    name,
    first_brewed,
    description,
    image_url,
    volume: { value },
  } = product;

  return (
    <Card>
      <h3>{`${name.slice(0, 7)}...`}</h3>
      <img src={image_url} alt={name} />
      <p>{`${description.slice(0, 58)}...`}</p>
      <p>{first_brewed}</p>
      <p>{value} litros</p>
      <Button onClick={() => addToWeddingList(id)}> Casamento </Button>
      <Button onClick={() => addToGraduationList(id)}> Graduação </Button>
      <Button onClick={() => addToConfraternizationList(id)}>
        Confraternização
      </Button>
    </Card>
  );
}

export default ProductsList;
