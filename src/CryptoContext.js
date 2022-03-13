import React, { createContext, useContext, useEffect, useState } from "react";
import { currencies } from "./Config/currencies";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    //if (currency === "INR") setSymbol("₹");
    //if (currency === "USD") setSymbol("$");
    Object.entries(currencies).forEach(c => {
      if(currency === c[1].code){
        setSymbol(c[1].symbol);
      }
    });
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
