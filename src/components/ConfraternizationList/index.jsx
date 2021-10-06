import Button from "../Button";
import { Card } from "./styles";
import { ConfraternizationContext } from "../../providers/confraternization";
import { useContext } from "react";

function ConfraternizationList({ product }) {
  const { removeFromConfraternizationList } = useContext(
    ConfraternizationContext
  );

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
      <Button onClick={() => removeFromConfraternizationList(id)}>
        Remover Bebida
      </Button>
    </Card>
  );
}

export default ConfraternizationList;
