import React from 'react'
import * as bs from 'react-bootstrap'
import teamMapper from './mapper'
import LineChart from './area'
import { score_data } from './data_manipulation'

export default function Dashboard (props) {
    let { scores, opponent_scores, opponent } = score_data(props.schedule, props.id)

    const data = {
        labels: opponent,
        datasets: [
            {
                label: `Points Scored (${props.id})`,
                data: scores,
                borderColor: '#6E81F8',
                fill: 'false',
                backgroundColor: '#85C1E9',
                pointRadius: 0,
                tension: 0
            },
            {
                label: 'Points Scored by Opponent',
                data: opponent_scores,
                borderColor: '#DE6152',
                fill: false,
                backgroundColor: '#F5B7B1',
                pointRadius: 0,
                tension: 0
            }
        ]
    }

    return (
        <bs.Container>
            <bs.Row>
                <bs.Col md='3'>
                    <img alt='Team Logo' src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${teamMapper[props.id]}.svg`}/>
                </bs.Col>
                <bs.Col md='9'>
                    <h2 className='inline' style={{
                        paddingTop: '3rem'
                    }}>{props.name}</h2>
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col md='8'>
                    <LineChart data={data} height={250} width={60} options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Team Scores vs Oppenents',
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

                </bs.Col>
            </bs.Row>
            <bs.Row>

            </bs.Row>
        </bs.Container>
    )
}