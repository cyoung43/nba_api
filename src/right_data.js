import React from 'react'
import { team_names } from './mapper'
import { Link } from 'react-router-dom'
import './right_data.css'

export default function RightData (props) {
    return (
        <div>
            { props.games.reverse().slice(0, props.size).map(game => {
                const date = `${game.date.split(' ')[0]}-${game.date.split(' ')[1]}`
                
                    return (
                        <div key={`${game.date.split(' ')[0]}-${game.date.split(' ')[1]}`} style={{
                            fontSize: '0.8rem',
                            paddingLeft: '2rem'
                        }}>
                            <Link key={date} className='gameLink'
                                to={`/team/${props.team}/game/${date}`} style={{
                                    textDecoration: 'none',
                                    color: 'black'
                                }}>
                                <p style={{
                                    display: 'inline'
                                }}>
                                    {game.date + ' '} 
                                    {game.opponent === game.home_team ? '@' : ''} 
                                    {' ' + team_names[game.opponent][1]} | 
                                </p>
                                <p style={{
                                    display: 'inline',
                                    color: `${game.result === 'W' ? 'green' : '#CD6155'}`
                                }}>
                                    <strong>{' ' + game.result}</strong>
                                </p>
                            </Link>
                        </div>
                    )
                })
                }
        </div>
    )
}