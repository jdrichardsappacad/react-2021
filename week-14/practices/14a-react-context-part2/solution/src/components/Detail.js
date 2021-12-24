import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';
import horoscopeObj from '../data/horoscopes';

const Detail = () => {
  const { currentSign, setCurrentSign } = useContext(HoroscopeContext);
  const sign = horoscopeObj[currentSign];

  return (
    <div className='details'>
      <img alt='horoscope name' src={sign.backgroundImg}></img>
      <h2>{sign.name}</h2>
      <h4>Element: {sign.element}</h4>
      <h4>Traits: {sign.traits}</h4>
    </div>
  );
};

export default Detail;
