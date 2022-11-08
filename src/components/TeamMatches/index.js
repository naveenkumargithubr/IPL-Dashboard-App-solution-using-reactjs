// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    bannerImgUrl: '',
    latestMatches: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const temaBannerUrl = data.team_banner_url

    const latestMatchDetails = {
      id: data.latest_match_details.id,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const recentMatchDetails = data.recent_matches.map(eachTeam => ({
      id: eachTeam.id,
      competingTeam: eachTeam.competing_team,
      competingTeamLogo: eachTeam.competing_team_logo,
      date: eachTeam.date,
      firstInnings: eachTeam.first_innings,
      manOfTheMatch: eachTeam.man_of_the_match,
      matchStatus: eachTeam.match_status,
      result: eachTeam.result,
      secondInnings: eachTeam.second_innings,
      umpires: eachTeam.umpires,
      venue: eachTeam.venue,
    }))

    this.setState({
      bannerImgUrl: temaBannerUrl,
      latestMatches: latestMatchDetails,
      recentMatches: recentMatchDetails,
      isLoading: false,
    })
  }

  getTeamColorChange = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return null
    }
  }

  render() {
    const {bannerImgUrl, latestMatches, recentMatches, isLoading} = this.state
    const changeColour = `team-matches-container ${this.getTeamColorChange()}`
    return (
      <div className={`loader ${changeColour}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={changeColour}>
            <img src={bannerImgUrl} alt="team banner" className="banner-img" />
            <h1 className="match-head">Latest Matches</h1>
            <div className="Match-card-conatainer">
              <LatestMatch latestMatchDetails={latestMatches} />
              <ul className="unorder-list-container">
                {recentMatches.map(eachItem => (
                  <MatchCard key={eachItem.id} matchDetails={eachItem} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
