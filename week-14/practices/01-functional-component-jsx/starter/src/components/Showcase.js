import bulbImg from '../images/bulbasaur.jpg'

export default function Showcase() {
  let favPokemon = "Charizard"
  let pokeCharacteristics = {
    type: "fire",
    move: "fire-blast"
  }

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbImg} />
      <h2>{favPokemon}'s type is {pokeCharacteristics.type} and their move is {pokeCharacteristics.move}</h2>
    </div>
  );
}
