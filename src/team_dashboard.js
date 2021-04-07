import React from 'react'
import * as bs from 'react-bootstrap'
import teamMapper from './mapper'
import Line from './area'

export default function Dashboard (props) {
    console.log(props.teams)
    console.log(props.schedule)
    const games = []
    const scores = []
    const opponent_scores = []
    const opponent = []
    Object.entries(props.schedule.home_team).map(game => {
        if (game[1] === props.id) {
            games.push(Number(game[0]))
        }
        return null
    })
    Object.entries(props.schedule.away_team).map(game => {
        if (game[1] === props.id) {
            games.push(Number(game[0]))
        }
        return null
    })
    Object.entries(props.schedule.points_scored).map(game => {
        if (game[0] in games) {
            scores.push(game[1])
        }
        return null
    })
    Object.entries(props.schedule.points_allowed).map(game => {
        if (game[0] in games) {
            opponent_scores.push(game[1])
        }
        return null
    })
    Object.entries(props.schedule.opponent_abbr).map(game => {
        if (game[0] in games) {
            opponent.push(game[1])
        }
        return null
    })
    console.log(scores)

    const data = {
        labels: opponent,
        datasets: [
            {
                label: 'Points Scored',
                data: scores
            },
            {
                label: 'Points Scored by Opponent',
                data: opponent_scores
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
                <bs.Col md='6'>
                    <Line data={data}/>
                </bs.Col>
                <bs.Col md='6'>

                </bs.Col>
            </bs.Row>
            <bs.Row>

            </bs.Row>
        </bs.Container>
    )
}