import PokeMoves from './Pokemoves';
import './BaseStats.css';

const BaseStats = (props) => {
  return (
    <div>
      <h1>BaseStats</h1>

      <div className='base-stats'>
        <table>
          <tbody>
            <tr>
              <td>Hit Points</td>
              <td>{props.stats.hp}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td>{props.stats.attack}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{props.stats.defense}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{props.stats.speed}</td>
            </tr>
          </tbody>
        </table>
        <button className='sp-stats' >
          Check Special Stats
        </button>
      </div>
      <PokeMoves />
    </div>
  );
};
export default BaseStats;
