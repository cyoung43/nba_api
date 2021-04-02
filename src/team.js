import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import Loading from './loading'
//import * as NBAIcons from 'react-nba-logos'

export default function Team () {
    const context = React.useContext(AppContext)
    const match = useRouteMatch({path: '/team/:id', strict: true, sensitive: true})
    let teams

    try {
        teams = context.season
        return (
            <>
                <h1>Team {teams.name[match.params.id]}</h1>
            </>
        )
    }
    catch (err) {
        // Handle this better
        console.log(err)
        return (
            <>
                <Loading header='Team'/>
            </>
        )
    }
}