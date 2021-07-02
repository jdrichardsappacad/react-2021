import { useState } from "react";
import { useHoroscrope } from "../context/HoroscopeContext";
const Match = () => {
  const [match, setMatch] = useState(false);
  const {sign} = useHoroscrope();



  return (
    <>
      <button onClick={() => setMatch(!match)}>
        {match ? "Hide Match" : "Reveal Match!"}
      </button>
      {match &&
        <div>{sign.match}</div>
      }
    </>
  )
}

export default Match;
