import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import Loading from './loading'
import NotFound from './not_found'
import '@fortawesome/fontawesome-free/css/all.css'
import Dashboard from './team_dashboard'

export default function Team () {
    const context = useContext(AppContext)
    const match = useRouteMatch({path: '/team/:id', strict: true, sensitive: true})

    if (!match) {
        return (
            <>
                <NotFound />
            </>
        )
    }

    const team_id = match.params.id
    let teams
    let schedule
    
    try {
        teams = context.season
        schedule = context.schedule

        if (!teams[team_id]) {
            return (
                <NotFound />
            )
        }

        return (
            <>
                <Dashboard name={teams[team_id].name} id={team_id} teams={teams} schedule={schedule}/>
            </>
        )
    }
    catch (err) {
        
        return (
            <>
                <Loading header='Team'/>
            </>
        )
    }
}