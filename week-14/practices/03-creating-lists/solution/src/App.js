import Showcase from './Showcase';
import BaseStats from './BaseStats';
import './App.css';

function App() {
  const baseStats = {
    hp: 45,
    attack: 49,
    defense: 49,
    spAttack: 65,
    spDef: 65,
    speed: 45
  };

  const handleClick = () => {
    alert(
      `Special Stats:\nSpecial Attack: ${baseStats.spAttack}\nSpecial Defense: ${baseStats.spDef}`
    );
  };

  return (
    <div className='main-wrapper background'>
      <Showcase />
      <BaseStats clicker={handleClick} stats={baseStats} />
    </div>
  );
}

export default App;
