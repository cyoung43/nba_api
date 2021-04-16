import React from 'react'
import * as bs from 'react-bootstrap'
import { teamMapper, team_names } from './mapper'

export default function GameDashboard (props) {
    const home = props.team === props.game.home_team ? true : false

    console.log(props.game, props.stats)

    return (
        <bs.Container>
            <bs.Row>
                <bs.Col md='3'>
                    <img alt={`${props.team} Logo`} src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${teamMapper[props.team]}.svg`} style={{
                            paddingLeft: '0.5rem'
                        }} />
                </bs.Col>
                <bs.Col md='6' style={{
                    paddingTop: '1rem'
                }}>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.03)',
                        border: '1px solid',
                        borderColor: 'gray',
                        borderRadius: '3px',
                    }}>
                        <h4 className='inline text-center' style={{
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                            marginTop: '0.5rem'
                        }}>
                            {home ? team_names[props.game.home_team][0] : team_names[props.game.away_team][0]}
                            <br /> vs <br />
                            {home ? team_names[props.game.away_team][0] : team_names[props.game.home_team][0]}
                        </h4>
                    </div>
                </bs.Col>
                <bs.Col md='3'>
                    <img alt={`${home ? props.game.away_team : props.game.home_team} Logo`} 
                        src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${home ? teamMapper[props.game.away_team] : teamMapper[props.game.home_team]}.svg`} style={{
                            paddingLeft: '1rem',
                            paddingTop: '0.3rem'
                        }} />
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col md='12'>
                    <hr />
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col>
                    <div className='text-center'>
                        <h2>
                            {home ? `${props.game.points_scored} - ${props.game.points_allowed}` : 
                                `${props.game.points_allowed} - ${props.game.points_scored}`}
                        </h2>
                    </div>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}