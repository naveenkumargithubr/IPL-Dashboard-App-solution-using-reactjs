// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    allMatchData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    //  console.log(data)
    // getting the home teamcards data using the api call
    const updatedMatchData = data.teams.map(eachMatch => ({
      id: eachMatch.id,
      name: eachMatch.name,
      teamImageUrl: eachMatch.team_image_url,
    }))
    // console.log(updatedMatchData)
    this.setState({allMatchData: updatedMatchData, isLoading: false})
  }

  render() {
    const {allMatchData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader type="Oval" color="green" height={50} width={50} />
          </div>
        ) : (
          <div className="home-container">
            <div className="ipl-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-heading">IPL Dashboard</h1>
            </div>
            <div className="teamcad-container">
              <ul className="list-container">
                {allMatchData.map(eachData => (
                  <TeamCard matchDetails={eachData} key={eachData.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
