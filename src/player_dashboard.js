import React, { useContext, useState } from 'react'
import AppContext from './context'
import { useRouteMatch } from 'react-router-dom'
import { match_player, test_pic } from './player_functions'
import * as bs from 'react-bootstrap'
import Loading from './loading'
import NotFound from './not_found'

export default function PlayerDashboard (props) {
    const context = useContext(AppContext)
    const match = useRouteMatch({path: '/player/:id', strict: true, sensitive: true})
    const { player } = match_player(context.players, match.params.id.split('-'))
 
    try {
        const nba = require('nba-api-client')
        const player_pic = nba.getPlayerID(player.name)
        const { pic_url } = test_pic(player_pic)
        if (!player) {
            return (
                <div>
                    <NotFound />
                </div>
            )
        }
        console.log(player)
        return (
            <bs.Container>
                <bs.Row>
                    <bs.Col>
                        <div>
                            Beginning of the player dashboard
                            <img src={pic_url} 
                                alt={`${player.name} headshot`} style={{
                                    height: '12rem'
                                }}/>
                        </div>

                    </bs.Col>
                </bs.Row>
                <bs.Row>

                </bs.Row>
            </bs.Container>

        )  
    }
    catch (err) {
        console.log(err)
        return (
            <div>
                <Loading />
            </div>
        )
    }
    
}


// notes: from lighthouse report I decreased the size of my players json object
// so that I would have better performance