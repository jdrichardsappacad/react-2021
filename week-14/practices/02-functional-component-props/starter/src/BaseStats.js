import './BaseStats.css'

export default function BaseStats({clicker,stats}) {
  return (
    <div className="base-stats">
      <h1>
        Base Stats
      </h1>
      <button onClick={clicker}>Check Special Stats</button>
      <table>
        <tr>
          <td>
            Hit Points
          </td>
          <td>
            {stats.hp}
          </td>
        </tr>
        <tr>
          <td>
            Attack
          </td>
          <td>
            {stats.attack}
          </td>
        </tr>
        <tr>
          <td>
            Defense
          </td>
          <td>
            {stats.defense}
          </td>
        </tr>
        <tr>
          <td>
            Speed
          </td>
          <td>
            {stats.speed}
          </td>
        </tr>
      </table>

    </div>
  )
}
