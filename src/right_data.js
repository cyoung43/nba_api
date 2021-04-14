import React from 'react'
import { team_names } from './mapper'

export default function RightData (props) {
    return (
        <div>
            { props.games.reverse().slice(0, props.size).map(game => {
                    return (
                        <div key={`${game.date.split(' ')[0]}-${game.date.split(' ')[1]}`} style={{
                            fontSize: '0.8rem',
                            paddingLeft: '2rem'
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
                        </div>
                    )
                })
                }
        </div>
    )
}