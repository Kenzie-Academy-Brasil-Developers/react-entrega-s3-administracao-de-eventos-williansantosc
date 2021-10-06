import { useContext } from "react";
import ProductsList from "../../components/ProductsList";
import { Container, MainContainer, Page } from "./styles";
import { ProductsContext } from "../../providers/products";
import Menu from "../../components/Menu";
import { FcNext, FcPrevious } from "react-icons/fc";

function Home() {
  const { products, page, nextPage, previousPage } =
    useContext(ProductsContext);

  return (
    <MainContainer>
      <Menu />
      <h1>Bebidas</h1>
      <Container>
        {products.map((product) => (
          <ProductsList key={product.id} product={product} />
        ))}
      </Container>

      <Page>
        <FcPrevious onClick={previousPage} />
        <p>{page}</p>
        <FcNext onClick={nextPage} />
      </Page>
    </MainContainer>
  );
}

export default Home;
