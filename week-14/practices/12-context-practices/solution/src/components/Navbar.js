import { useContext } from 'react';
import { HoroscopeContext } from 'react';

const Navbar = () => {
  const {setCurrentSign} = useContext(HoroscopeContext)
  const horoscopes = Object.keys(horoscopesObj);

  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={() => setCurrentSign(sign)}>
          {sign}
        </span>
      ))}
    </nav>
  )
};

export default Navbar;
