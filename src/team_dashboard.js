import React from 'react'
import * as bs from 'react-bootstrap'
import { teamMapper } from './mapper'
import LineChart from './line'
import { score_data, team_points, other_stats, shooting_percentages } from './data_manipulation'
import DonutChart from './donut'

export default function Dashboard (props) {
    const team = props.teams[props.id]
    const { scores, opponent_scores, opponent_name } = score_data(props.schedule, props.id)
    const { team_pts, opponent_pts } = team_points(team.points, team.opp_points, team.games_played)
    const stats = other_stats(team.total_rebounds, team.assists, team.steals, team.turnovers, team.games_played)
    const shooting = shooting_percentages(team.two_point_field_goal_percentage, team.three_point_field_goal_percentage, team.field_goal_percentage, team.free_throw_percentage, props.id)
    const line_data = {
        labels: opponent_name,
        datasets: [
            {
                label: `Points Scored (${props.id})`,
                data: scores,
                borderColor: '#2874A6',
                fill: 'false',
                backgroundColor: '#2874A6',
                pointRadius: 0,
                tension: 0,
                pointHitRadius: 10
            },
            {
                label: 'Points Scored by Opponent',
                data: opponent_scores,
                borderColor: '#CD6155',
                fill: false,
                backgroundColor: '#CD6155',
                pointRadius: 0,
                tension: 0,
                pointHitRadius: 10
            }
        ]
    }
    
    const donut_data = {
        labels: [`Points Scored per Game (${props.id})`, 'Points Allowed per Game'],
        datasets: [{
            data: [team_pts, opponent_pts],
            backgroundColor: [
                '#2874A6',
                '#CD6155'
            ],
            hoverOffset: 10
        }]
    }

    const shooting_data = {
        labels: shooting[1],
        datasets: [{
            data: shooting[0],
            backgroundColor: [
                '#5D6D7E',
                '#5DADE2',
                '#CD6155',
                '#2874A6'
            ],
            hoverOffset: 10
        }]
    }

    return (
        <bs.Container>
            <bs.Row>
                <bs.Col md='2'>
                    <img alt='Team Logo' src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${teamMapper[props.id]}.svg`} style={{
                        paddingLeft: '0.5rem'
                    }} />
                </bs.Col>
                <bs.Col md='10' style={{
                    marginTop: '2rem',
                    paddingRight: '2.5rem',
                    paddingLeft: '2rem'
                }}>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.03)',
                        border: '1px solid',
                        borderColor: 'gray',
                        borderRadius: '3px'
                    }}>
                        <h2 className='inline' style={{
                            paddingTop: '1rem',
                            paddingLeft: '4rem',
                            paddingBottom: '1rem'
                        }}>{props.name}</h2>
                    </div>
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col md='8'>
                    <LineChart data={line_data} height={250} width={60} options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Team Scores vs Opponents',
                            fontSize: '18'
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: false
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Points Scored'
                                },
                                ticks: {
                                    min: 40,
                                    stepSize: 20
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Opponents Played 2021'
                                }
                            }]
                        }
                    }}/>
                </bs.Col>
                <bs.Col md='4'>
                    <div style={{
                        height: '8rem'
                    }}>
                        <DonutChart data={donut_data} height={10} width={10} options={{
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: 'Points per Game',
                                fontSize: '18'
                            }
                        }} />
                    </div>
                    <div style={{
                        height: '8rem'
                    }}>
                        <DonutChart data={shooting_data} height={10} width={10} options={{
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: `Shooting Percentages`,
                                fontSize: '18'
                            }
                        }} />
                    </div>
                </bs.Col>
            </bs.Row>
            <bs.Row style={{
                paddingTop: '1rem'
            }}>
                { 
                    stats.map(stat => {
                        console.log(stat)
                        return (
                            <bs.Col md='3' key={stat[1]}>
                                <bs.Card>
                                    <bs.Card.Header as='h6' className='text-center'>
                                        {stat[2]} Per <br /> Game
                                    </bs.Card.Header>
                                    <bs.Card.Body className='font-weight-bold text-center' style={{
                                        fontSize: '2rem'
                                    }}>
                                        { stat[0] }
                                    </bs.Card.Body>
                                </bs.Card>
                            </bs.Col>

                        )
                    }) 
                }
            </bs.Row>
        </bs.Container>
    )
}