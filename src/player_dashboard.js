import React, { useState } from 'react'
import * as bs from 'react-bootstrap'
import { teamMapper } from './mapper'
import BarChart from './bar'
import anonymous from './img/anonymous.png'
import { 
    logo_url,
    format_salary, 
    current_season, 
    bar_calculator,
    radar_calculator,
    card_data,
    money_data } from './player_functions'
import RadarChart from './radar'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { player_filter, player_url } from './select_functions'

export default function PlayerDashboard (props) {
    const [matchPlayer, setPlayer] = useState(null)
    const { url } = logo_url(props.data, props.player, teamMapper)
    const updated_salary = format_salary(props.player.salary)
    const { season } = current_season(props.data, props.player)
    const { data_card } = card_data(props.player)
    const { data_money } = money_data(props.player)
    const { player_names } = player_filter(props.data)

    const bar_data = {
        labels: ['PPG', 'RPG', 'APG', ['Shot', 'Distance']],
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

    const radar_data = {
        labels: ['3PT%', '2PT%', 'FG%', 'Within 3 feet %', '3-10 feet %', '10-16 feet %', '16+ feet %', '3PT Attempt Rate', 'True Shooting %'],
        datasets: [{
            label: `${season.season} Season`,
            data: radar_calculator(season),
            fill: true,
            backgroundColor: 'rgba(205, 97, 85, 0.2)',
            borderColor: 'rgb(205, 97, 85)'
        },
        {
            label: `${props.player.season} Stats`,
            data: radar_calculator(props.player),
            fill: true,
            backgroundColor: 'rgba(40, 116, 166, 0.2)',
            borderColor: 'rgb(40, 116, 166)' 
        }]
    }

    return (
        <bs.Container>
            <bs.Row >
                <bs.Col md='5' />
                <bs.Col md='2'>
                    <div style={{
                        paddingTop: '0.5rem',
                        position: 'absolute',
                        right: '0.5rem'
                    }}>
                        { matchPlayer && matchPlayer?.label !== props.player.name ?
                            <div>
                                <Link to={`/player/${player_url(matchPlayer.label)}`}>
                                    <bs.Button variant='outline-dark'>See Player</bs.Button>
                                </Link>
                            </div> :
                            <div></div>
                        }
                    </div>
                </bs.Col>
                <bs.Col md='5'>
                    <div style={{
                        paddingRight: '0.5rem',
                        paddingTop: '0.5rem'
                    }}>
                        <Select options={player_names} onChange={value => setPlayer(value)} 
                            placeholder='Change Player...' />
                    </div>
                </bs.Col>
            </bs.Row>
            <bs.Row style={{
                backgroundColor: '#29598A',
                margin: '0.5rem',
                borderRadius: '3px'
            }}>
                <bs.Col md='5'>
                    <div>
                        <img src={props.url ? props.url : anonymous} 
                            alt={`${props.player.name} headshot`} style={{
                                height: '13rem',
                                display: 'inline',
                                paddingTop: '1rem'
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
                    <img alt={`${props.player.team} Logo`} src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${url}.svg`} style={{
                        opacity: 0.5
                    }} title={props.player.team} />
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
                    }}><strong>Salary:</strong> ${typeof updated_salary === 'object' ? updated_salary.updated_salary : updated_salary}</div>
                    <hr />
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col md='4'>
                    <BarChart data={bar_data} options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: '2020-21 vs Career Stats',
                            fontSize: '18',
                            fontColor: '#343A40'
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: false
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    maxRotation: 0,
                                    minRotation: 0
                                }
                            }]
                        }
                    }} height={250} width={250} />
                </bs.Col>
                <bs.Col md='5'>
                    <div>
                        <RadarChart height={250} width={250} options={{
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: 'Shooting Percentages',
                                fontSize: '18',
                                fontColor: '#343A40'
                            }
                        }} data={radar_data} />
                    </div>
                </bs.Col>
                <bs.Col md='3' >
                    <div style={{
                        paddingTop: '0.3rem',
                        marginRight: '0.5rem'
                    }}>
                        { data_card.map(stat => {
                            return (
                                <div key={stat.id} className='border text-center' style={{
                                    borderRadius: '3px',
                                    marginBottom: '0.5rem',
                                    color: '#5D6D7E'
                                }}>
                                    <div className='border-bottom' style={{
                                        fontWeight: '500',
                                        color: 'black',
                                        backgroundColor: 'rgba(0, 0, 0, 0.03)'
                                    }}>
                                        {stat.label}
                                    </div>
                                    <div style={{
                                        color: 'black'
                                    }}>
                                        {stat.value}
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </bs.Col>
            </bs.Row>
            <bs.Row style={{
                paddingLeft: '0.5rem',
                paddingRight: '0.6rem'
            }}>
                <bs.Col md='12'>
                    <hr />
                    <bs.Row style={{
                        paddingBottom: '1rem'
                    }}>
                        { data_money.map(stat => {
                            return (
                                <bs.Col md='3' key={stat.id}>
                                    <bs.Card className='text-center'>
                                        <bs.Card.Header as='h6'>
                                            {stat.label}
                                        </bs.Card.Header>
                                        <bs.Card.Body>
                                            ${stat.value}
                                        </bs.Card.Body>
                                    </bs.Card>
                                </bs.Col>
                            )
                        })
                        }
                    </bs.Row>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}