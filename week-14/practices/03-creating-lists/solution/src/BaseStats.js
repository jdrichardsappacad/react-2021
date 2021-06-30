import PokeMoves from './Pokemoves';
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
        <button className='sp-stats' onClick={clicker}>
          Check Special Stats
        </button>
      </div>
      <PokeMoves />
    </div>
  );
};
export default BaseStats;
