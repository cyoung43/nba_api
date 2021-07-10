import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'

// remove upon success of sportsipy package
import players from './api/players.json'
import season from './api/season.json'
import schedule from './api/schedule.json'
import all_games from './api/all_games.json'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            // Functions Here
        }

        this.state = {
            season: [],
            players: [],
            schedule: [],
            games: []
        }
    }
  
    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}> 
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        // For reference once package is up and running again
        // 'http://ec2-54-234-191-128.compute-1.amazonaws.com/data/season.json'

        // const season = await axios.get('./api/season.json')
        // const players = await axios.get('./api/players.json')
        // const schedule = await axios.get('./api/schedule.json')
        // const games = await axios.get('./api/all_games.json')

        this.setState({
            season: season, 
            players: players,
            schedule: schedule,
            games: all_games
        })
    }
}