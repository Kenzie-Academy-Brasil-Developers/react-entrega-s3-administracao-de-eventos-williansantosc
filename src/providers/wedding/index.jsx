import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProductsContext } from "../products";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const { products } = useContext(ProductsContext);

  function addToWeddingList(productId) {
    const product = products.filter((item) => item.id === productId);

    if (weddingList.some((item) => item.id === productId)) {
      setWeddingList(weddingList);
      toast.error("Bebida já foi adicionado a lista de casamento!");
    } else {
      setWeddingList([...weddingList, product[0]]);
      toast.success("Bebida adicionada a lista de casamento");
    }
  }

  function removeFromWeddingList(id) {
    const newWeddingList = weddingList.filter((item) => item.id !== id);

    setWeddingList(newWeddingList);

    toast.success("Bebida removida da lista");
  }

  console.log(weddingList);

  return (
    <WeddingContext.Provider
      value={{ weddingList, addToWeddingList, removeFromWeddingList }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
