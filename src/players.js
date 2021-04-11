import React, { useContext, useState } from 'react'
import AppContext from './context'
import * as bs from 'react-bootstrap'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { player_filter, team_filters, position_filter, player_url } from './select_functions'

export default function Player () {
    const context = useContext(AppContext)
    const [player, setPlayer] = useState(null)
    console.log(player)
    const [team, setTeam] = useState(null)
    const [position, setPosition] = useState(null)
    const { player_names } = player_filter(context.players, team, position)
    const { filter } = team_filters(context.season)
    const { position_data } = position_filter(context.players)

    return (
        <>
            <bs.Container>
                <bs.Row>
                    <h2>Select a Player</h2>
                </bs.Row>
                <bs.Row>
                    <bs.Col md='6'>
                        <div>
                            <Select options={player_names} onChange={value => setPlayer(value)} 
                                placeholder='Select Player...' />
                        </div>
                    </bs.Col>
                    <bs.Col md='6'>
                        <div>
                            <Select isMulti name='filter' options={filter} className='basic-multi-select'
                                classNamePrefix='select' onChange={value => setTeam(...value)} 
                                placeholder='Filter on team...' />
                        </div>
                        <div>
                            <Select isMulti name='filter_position' options={position_data} className='basic-multi-select'
                                classNamePrefix='select' onChange={value => setPosition(...value)} 
                                placeholder='Filter on position...' />
                        </div>
                    </bs.Col>
                </bs.Row>
                <bs.Row>
                {
                    player ?
                    //<Link to={`/player/${player_url(player.label)}`}>
                    <div>
                        <Link className='button' to={`/player/${player_url(player.label)}`}>
                            <bs.Button variant='outline-dark'>
                                View Player Dashboard
                            </bs.Button>
                        </Link>
                    </div> :
                    //</Link> :
                    <div>Please select a player</div>
                }
                </bs.Row>
            </bs.Container>
        </>
    )
}