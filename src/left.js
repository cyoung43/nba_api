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
                        Object.entries(team.name).map(name => {
                            return (
                                <div key={name[0]} onMouseOver={() => setSize(true)} onMouseLeave={() => setSize(false)} style={{
                                    fontSize: `${size ? '0.9rem' : '0.8rem'}`
                                }}>
                                    <Link key={name[0]} to={`/team/${name[0]}`} style={{
                                        paddingLeft: '.8rem',
                                        color: 'black',
                                        fontSize: `${size ? '0.9rem' : '0.8rem'}`
                                    }}><strong>{name[0]}:</strong> {name[1]}</Link>
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

        return (
            <>
                <div>
                    <Loading header='Teams'/>
                </div>
            </>
        )
    }
}