import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProductsContext } from "../products";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [confraternizationList, setConfraternizationList] = useState([]);

  const { products } = useContext(ProductsContext);

  function addToConfraternizationList(productId) {
    const product = products.filter((item) => item.id === productId);

    if (confraternizationList.some((item) => item.id === productId)) {
      setConfraternizationList(confraternizationList);
      toast.error("Produto já foi adicionado a lista de confraternização!");
    } else {
      setConfraternizationList([...confraternizationList, product[0]]);
      toast.success("Bebida adicionada a lista de confraternização!");
    }
  }

  function removeFromConfraternizationList(id) {
    const newConfraternizationList = confraternizationList.filter(
      (item) => item.id !== id
    );

    setConfraternizationList(newConfraternizationList);

    toast.success("Bebida removida da lista");
  }

  console.log(confraternizationList);

  return (
    <ConfraternizationContext.Provider
      value={{
        confraternizationList,
        addToConfraternizationList,
        removeFromConfraternizationList,
      }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};
