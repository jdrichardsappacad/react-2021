import { createContext, useContext, useState } from "react";
import horoscopesObj from "../data/horoscopes";

export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Leo");

  const sign = horoscopesObj[currentSign]

  return (
    <HoroscopeContext.Provider value={{setCurrentSign, sign, horoscopesObj}}>
      {props.children}
    </HoroscopeContext.Provider>
  )
}

export const useHoroscope = () => useContext(HoroscopeContext);
