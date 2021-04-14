import React from 'react'
import AppContext from './context'
import Nav from 'react-bootstrap/Nav'
import Loading from './loading'
import { Link } from 'react-router-dom'
import './left.css'


export default function Left () {
    const context = React.useContext(AppContext)
    let team

    try {
        team = context.season
        return (
            <>
                <Nav variant='light' className='flex-column p-1'>
                    <Link to='/' style={{
                        paddingTop: '1rem',
                        color: 'black'
                    }}>
                        <h5 style={{
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>NBA Teams</h5>
                    </Link>
                    <hr style={{
                        width: '75%'
                    }}/>
                    <div style={{
                        paddingBottom: '1rem'
                    }}>
                    {
                        Object.entries(team).sort((a, b) => (a[1].name > b[1].name ? 1 : -1)).map(team => {
                            return (
                                <div key={team[1].abbreviation} style={{
                                    fontSize: '0.8rem'
                                }}>
                                    <Link key={team[1].abbreviation} to={`/team/${team[1].abbreviation}`} className='teamLink' style={{
                                        paddingLeft: '.8rem',
                                        color: 'black',
                                    }}><strong>{team[1].abbreviation}:</strong> {team[1].name}</Link>
                                </div>
                            )
                        })
                    }
                    </div>
                </Nav>
            </>
        )
    }

    catch(err) {
        console.log(err)
        return (
            <>
                <div>
                    <Loading header='Teams'/>
                </div>
            </>
        )
    }
}