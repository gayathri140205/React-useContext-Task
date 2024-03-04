

  // eslint-disable-next-line no-unused-vars
  import React, { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';  // Import PropTypes
import Products from "./Products";

const ContextContainer = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const [cardAmount, setCardAmount] = useState(0);
  const [cardQuantity, setCardQuantity] = useState(products.length);

  return (
    <ContextContainer.Provider
      value={{
        products,
        setProducts,
        cardQuantity,
        setCardQuantity,
        setCardAmount,
        cardAmount
      }}
    >
      {children}
    </ContextContainer.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(ContextContainer);
};

// Prop types validation for ContextProvider
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider };  // Export the component
