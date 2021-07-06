import bulbasaur from '../images/bulbasaur.jpg';
// import './Showcase.css';

const Showcase = () => {
  const favPokemon = 'Bulbasaur';

  const pokeCharacteristics = {
    type: 'Grass',
    move: 'Vine Whip'
  };

  return (
    <div
      //   className='showcase-wrapper'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 40
      }}
    >
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ height: 500, width: 500, padding: 20, borderRadius: '50%' }}
        src={bulbasaur}
        alt='bulbasaur'
      />
      <h2>
        {favPokemon}'s type is{' '}
        <span
          style={{ backgroundColor: 'green', color: 'white' }}
          //   className='poke-type'
        >
          {pokeCharacteristics.type}
        </span>{' '}
        and one of their moves is{' '}
        <span
          style={{ backgroundColor: '#fff', color: 'green' }}
          //   className='poke-move'
        >
          {pokeCharacteristics.move}
        </span>
        .
      </h2>
    </div>
  );
};
export default Showcase;
