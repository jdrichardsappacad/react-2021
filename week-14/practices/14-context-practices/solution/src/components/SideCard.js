import { useEffect } from "react";

const SideCard = () => {
  console.log("my side component re-rendered.")

  return (
    <div className="side-card">
      <h1>
        React Context with Horoscopes
      </h1>
    </div>)
}

export default SideCard;
