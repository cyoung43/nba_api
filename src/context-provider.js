import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'

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
        const season = await axios.get('http://ec2-54-234-191-128.compute-1.amazonaws.com/data/season.json')
        const players = await axios.get('http://ec2-54-234-191-128.compute-1.amazonaws.com/data/players.json')
        const schedule = await axios.get('http://ec2-54-234-191-128.compute-1.amazonaws.com/data/schedule.json')
        const games = await axios.get('http://ec2-54-234-191-128.compute-1.amazonaws.com/data/all_games.json')

        this.setState({
            season: season.data, 
            players: players.data,
            schedule: schedule.data,
            games: games.data
        })
    }
}