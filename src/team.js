import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import Loading from './loading'
import NotFound from './not_found'
//import * as NBAIcons from 'react-nba-logos'

export default function Team () {
    const context = React.useContext(AppContext)
    const match = useRouteMatch({path: '/team/:id', strict: true, sensitive: true})
    let teams
    
    
    try {
        teams = context.season
        if (!teams.name[match.params.id]) {
            return (
                <NotFound />
            )
        }
        return (
            <>
                <h1 style={{
                    textAlign: 'center',
                    paddingTop: '2rem'
                }}>Team {teams.name[match.params.id]}</h1>
            </>
        )
    }
    catch (err) {
        // Handle this better
        return (
            <>
                <Loading header='Team'/>
            </>
        )
    }
}