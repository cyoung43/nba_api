import React from 'react'
import * as bs from 'react-bootstrap'
import teamMapper from './mapper'
import BarChart from './bar'
import { logo_url, format_salary, current_season, bar_calculator } from './player_functions'

export default function PlayerDashboard (props) {
    const { url } = logo_url(props.data, props.player, teamMapper)
    const { updated_salary } = format_salary(props.player.salary)
    const { season } = current_season(props.data, props.player)
    console.log(season)
    const bar_data = {
        labels: ['PPG', 'RPG', 'APG', '3PT%', 'FG%', 'FT%', 'Shooting Distance'],
        datasets: [{
            label: `${season.season} Season`,
            data: bar_calculator(season),
            fill: true,
            backgroundColor: 'rgb(205, 97, 85)',
            borderColor: 'rgb(205, 97, 85)'
        },
        {
            label: `${props.player.season} Stats`,
            data: bar_calculator(props.player),
            fill: true,
            backgroundColor: 'rgb(40, 116, 166)',
            borderColor: 'rgb(40, 116, 166)'
        }]
    }

    return (
        <bs.Container>
            <bs.Row style={{
                backgroundColor: '#29598A',
                margin: '0.5rem',
                borderRadius: '3px'
            }}>
                <bs.Col md='5'>
                    <div>
                        <img src={props.url} 
                            alt={`${props.player.name} headshot`} style={{
                                height: '12rem',
                                display: 'inline'
                            }}/>
                    </div>
                </bs.Col>
                <bs.Col md='4'>
                    <h1 style={{
                        fontSize: '3rem',
                        fontStyle: 'oblique',
                        color: 'white',
                        paddingTop: '2rem'
                    }}>
                        {props.player.name.split(' ')[0]}<br />
                        {props.player.name.split(' ')[1]}
                    </h1>
                </bs.Col>
                <bs.Col md='3'>
                    <img alt='Team Logo' src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${url}.svg`} style={{
                        opacity: 0.5
                    }} />
                </bs.Col>
            </bs.Row>
            <bs.Row style={{
                paddingLeft: '0.5rem',
                paddingRight: '0.6rem'
            }}>
                <bs.Col md='12'>
                    <div style={{
                        paddingTop: '.2rem',
                        display: 'inline'
                    }}>
                        <strong>Position:</strong> {props.player.position} | {' '}
                        <strong>Height:</strong> {props.player.height} | {' '}
                        <strong>Weight:</strong> {props.player.weight}
                        
                    </div>
                    <div style={{
                        display: 'inline',
                        position: 'absolute',
                        right: '1.5rem'
                    }}><strong>Salary:</strong> ${updated_salary}</div>
                    <hr />
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col md='4'>
                    <BarChart data={bar_data} options={{
                        maintainAspectRatio: false
                    }} height={250} width={250} />
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}