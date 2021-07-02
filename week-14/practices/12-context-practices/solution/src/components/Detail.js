import { useHoroscope } from "../context/HoroscopeContext";
import Match from "./Match";

const Detail = () => {
  const {sign} = useHoroscope();

  return (
    <div className="details">
      <img alt="horoscope name" src={sign.backgroundImg}></img>
      <h2>{sign.name}</h2>
      <h4>Element: {sign.element}</h4>
      <h4>Traits: {sign.traits}</h4>
      <Match />
    </div>
  )
}

export default Detail;
