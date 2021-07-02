import { createContext, useContext, useState } from "react";
import horoscopesObj from "../data/horoscopes";

// Practice 1 - Context Provider with Dynamic Value Practice.
export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Leo");

  return (
    <HoroscopeContext.Provider value={{setCurrentSign, sign}}>
      {props.children}
    </HoroscopeContext.Provider>
  )
}

//Practice 2
// export const HoroscopeProvider = (props) => {
//   const [currentSign, setCurrentSign] = useState("Leo");

//   const sign = horoscopesObj[currentSign]

//   return (
//     <HoroscopeContext.Provider value={{setCurrentSign, sign, horoscopesObj}}>
//       {props.children}
//     </HoroscopeContext.Provider>
//   )
// }

//Practice 3
// export const useHoroscrope = () => useContext(HoroscopeContext);
