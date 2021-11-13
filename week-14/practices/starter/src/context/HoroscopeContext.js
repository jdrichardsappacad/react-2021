import { createContext, useState } from 'react';

export const HoroscopeContext = createContext();

const HoroscopeProvider = props => {
  const [currentSign, setCurrentSign] = useState('Virgo');
  return (
    <HoroscopeContext.Provider value={{ currentSign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
