// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-up-container">
        <p className="team-head">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <div className="image-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="logo"
        />
      </div>
      <div className="latest-match-down-container">
        <p className="first-innings">First Innings</p>
        <p className="heading-color">{firstInnings}</p>
        <p className="first-innings">Second Innings</p>
        <p className="heading-color">{secondInnings}</p>
        <p className="first-innings">Man Of The Match</p>
        <p className="heading-color">{manOfTheMatch}</p>
        <p className="first-innings">Umpires</p>
        <p className="heading-color">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
