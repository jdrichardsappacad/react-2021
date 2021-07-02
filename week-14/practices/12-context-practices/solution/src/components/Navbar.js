import { useHoroscrope } from "../context/HoroscopeContext";
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

//Refactored to make things more dynamic
// const Navbar = () => {
//   // const { setCurrentSign, horoscopesObj } = useHoroscrope();
//   const horoscopes = Object.keys(horoscopesObj);

//   return (
//     <nav>
//       {horoscopes.map(sign => (
//         <span key={sign} onClick={() => setCurrentSign(sign)}>
//           {sign}
//         </span>
//       ))}
//     </nav>
//   )
// };

export default Navbar;
