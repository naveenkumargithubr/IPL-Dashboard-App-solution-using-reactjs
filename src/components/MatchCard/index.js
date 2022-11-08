// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails

  const isWin = () => {
    if (matchStatus === 'Lost') {
      return <p className="lost">{matchStatus}</p>
    }
    return <p className="win">{matchStatus}</p>
  }

  return (
    <div className="Match-card-cont">
      <li className="list-container">
        <img
          src={competingTeamLogo}
          alt={`competing Team ${competingTeam}`}
          className="team-logo"
        />
        <p className="competingTeam">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className="matchstatus"> {isWin()}</p>
      </li>
    </div>
  )
}

export default MatchCard
