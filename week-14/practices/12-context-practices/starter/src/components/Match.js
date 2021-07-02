import { useState } from "react";

const Match = () => {
  const [match, setMatch] = useState(false);
  
  return (
    <>
      <button onClick={() => setMatch(!match)}>
        {match ? "Hide Match" : "Reveal Match!"}
      </button>
      {match &&
        <div>Sign's best match goes here</div>
      }
    </>
  )
}

export default Match;
