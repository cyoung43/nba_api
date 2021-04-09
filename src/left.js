import React, { useState } from 'react'
import AppContext from './context'
import Nav from 'react-bootstrap/Nav'
import Loading from './loading'
import { Link } from 'react-router-dom'


export default function Left () {
    const context = React.useContext(AppContext)
    const [size, setSize] = useState(false)
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
                        Object.entries(team).map(team => {
                            return (
                                <div key={team[1].abbreviation} onMouseOver={() => setSize(true)} onMouseLeave={() => setSize(false)} style={{
                                    fontSize: `${size ? '0.9rem' : '0.8rem'}`
                                }}>
                                    <Link key={team[1].abbreviation} to={`/team/${team[1].abbreviation}`} style={{
                                        paddingLeft: '.8rem',
                                        color: 'black',
                                        fontSize: `${size ? '0.9rem' : '0.8rem'}`
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