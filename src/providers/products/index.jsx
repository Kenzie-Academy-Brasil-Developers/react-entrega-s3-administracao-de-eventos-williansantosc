import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  function handleData() {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=24`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    handleData();
  }, [page]);

  function nextPage() {
    if (page < 14) {
      setPage(page + 1);
    }
  }

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <ProductsContext.Provider
      value={{ products, page, nextPage, previousPage }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
