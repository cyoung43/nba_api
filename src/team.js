import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import Loading from './loading'
import NotFound from './not_found'
import '@fortawesome/fontawesome-free/css/all.css'
import teamMapper from './mapper'

export default function Team () {
    const context = React.useContext(AppContext)
    const match = useRouteMatch({path: '/team/:id', strict: true, sensitive: true})
    let teams
    
    try {
        teams = context.season
        console.log(teams.abbreviation)
        if (!teams.name[match.params.id]) {
            return (
                <NotFound />
            )
        }
        return (
            <>
                <h2 style={{
                    textAlign: 'center',
                    paddingTop: '3rem',
                    display: 'inline'
                }}>{teams.name[match.params.id]}</h2>
                <img alt={`${teams.name[match.params.id]} Logo`} src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${teamMapper[match.params.id]}.svg`} 
                    style={{
                        height: '8rem',
                        paddingTop: '1rem',
                        paddingLeft: '2rem'
                }} className='inline'/>
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