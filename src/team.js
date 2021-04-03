import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import Loading from './loading'
import NotFound from './not_found'
import '@fortawesome/fontawesome-free/css/all.css'

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
                <img alt='NBA Logo' src={`${process.env.PUBLIC_URL}/assets/logos/${match.params.id}.png`} 
                    style={{
                        height: '8rem',
                        paddingTop: '1rem',
                        paddingLeft: '2rem'
                }} className='inline'/>
                <h2 style={{
                    textAlign: 'center',
                    paddingTop: '3rem',
                    display: 'inline'
                }}>Team {teams.name[match.params.id]}</h2>
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