import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProductsContext } from "../products";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [graduationList, setGraduationList] = useState([]);

  const { products } = useContext(ProductsContext);

  function addToGraduationList(productId) {
    const product = products.filter((item) => item.id === productId);

    if (graduationList.some((item) => item.id === productId)) {
      setGraduationList(graduationList);
      toast.error("Produto já foi adicionado a lista de graduação!");
    } else {
      setGraduationList([...graduationList, product[0]]);
      toast.success("Bebida adicionada a lista de graduação");
    }
  }

  function removeFromGraduationList(id) {
    const newGraduationList = graduationList.filter((item) => item.id !== id);

    setGraduationList(newGraduationList);

    toast.success("Bebida removida da lista");
  }

  console.log(graduationList);

  return (
    <GraduationContext.Provider
      value={{ graduationList, addToGraduationList, removeFromGraduationList }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
