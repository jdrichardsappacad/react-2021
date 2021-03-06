//!!START SILENT
import PokeMoves from './Pokemoves';
//!!END
import './BaseStats.css';

const BaseStats = ({ clicker, stats: { hp, attack, defense, speed } }) => {
  return (
    <div>
      <h1>BaseStats</h1>

      <div className='base-stats'>
        <table>
          <tbody>
            <tr>
              <td>Hit Points</td>
              <td>{hp}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{attack}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{defense}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{speed}</td>
            </tr>
          </tbody>
        </table>
        {/*!!!START SILENT */}
        <button onClick={clicker} className='sp-stats'>
          Check Special Stats
        </button>
        {/*!!END */}
      </div>
      {/*!!!START SILENT */}
      <PokeMoves />
      {/*!!END */}
    </div>
  );
};
export default BaseStats;
