import Showcase from './Showcase';
import BaseStats from './BaseStats';
import './App.css';

function App() {
  //!!START SILENT 
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
      `Special Stats:\nSpecialAttack: ${baseStats.spAttack}\nSpecialDefense:${baseStats.spDef}`
    );
  };
  //!!END
  return (
    <div className='main-wrapper background'>
      <Showcase />
      {/*!!START SILENT */}
      <BaseStats clicker={handleClick} stats={baseStats} />
      {/*!!END */}
    </div>
  );
}

export default App;
