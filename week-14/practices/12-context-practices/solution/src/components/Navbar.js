import { useHoroscrope } from "../context/HoroscopeContext";

const Navbar = () => {
  const { setCurrentSign, horoscopesObj } = useHoroscrope();
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
