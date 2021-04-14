import React, { useContext, useState } from 'react'
import AppContext from './context'
import * as bs from 'react-bootstrap'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import Loading from './loading'
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
                <bs.Row style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div className='text-center' style={{
                        paddingTop: '1rem'
                    }}>
                        <h2>Select a Player to Start</h2>
                    </div>
                </bs.Row>
                <hr />
                <bs.Row>
                    <bs.Col md='1' />
                    <bs.Col md='5'>
                        <div>
                            <Select isMulti name='filter' options={filter} className='basic-multi-select'
                                classNamePrefix='select' onChange={value => setTeam(...value)} 
                                placeholder='Filter on team...' />
                        </div>
                    </bs.Col>
                    <bs.Col md='5'>
                        <div>
                            <Select isMulti name='filter_position' options={position_data} className='basic-multi-select'
                                classNamePrefix='select' onChange={value => setPosition(...value)} 
                                placeholder='Filter on position...' />
                        </div>
                    </bs.Col>
                    <bs.Col md='1'/>
                </bs.Row>
                <hr />
                <bs.Row>
                    <bs.Col md='4' />
                    <bs.Col md='4'>
                        <div>
                            <Select options={player_names} onChange={value => setPlayer(value)} 
                                placeholder='Select Player...' />
                        </div>
                    </bs.Col>
                    <bs.Col md='4' />
                </bs.Row>
                <bs.Row style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {
                    player ?
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '1rem'
                    }}>
                        <Link className='button' to={`/player/${player_url(player.label)}`}>
                            <bs.Button variant='outline-dark'>
                                View Player Dashboard
                            </bs.Button>
                        </Link>
                    </div> :
                    <div className='text-center' style={{
                        paddingTop: '1rem'
                    }}></div>
                }
                </bs.Row>
            </bs.Container>
        </>
    )
}