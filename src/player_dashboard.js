import React, { useContext, useState } from 'react'
import AppContext from './context'
import { useRouteMatch } from 'react-router-dom'
import { match_player } from './player_functions'
import Loading from './loading'
import NotFound from './not_found'
import anonymous from './img/anonymous.png'

export default function PlayerDashboard (props) {
    const context = useContext(AppContext)
    const match = useRouteMatch({path: '/player/:id', strict: true, sensitive: true})
    const { player } = match_player(context.players, match.params.id.split('-'))
    const [loaded, setLoad] = useState(true)
    let nba, player_pic
    try {
        nba = require('nba-api-client')
        player_pic = nba.getPlayerID(player.name)
        if (!player_pic) {
            setLoad(false)
        }
        console.log(player_pic)
        if (!player) {
            return (
                <div>
                    <NotFound />
                </div>
            )
        }
        return (
            <div>
                Beginning of the player dashboard
                {
                    loaded ?
                    <img src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${player_pic.PlayerID}.png`} 
                        alt={`${player.name} headshot`} style={{
                            height: '12rem'
                        }}/> :
                    <img src={anonymous} 
                    alt={`${player.name} headshot`} style={{
                        height: '12rem'
                    }}/>  
                }
                
            </div>
        )  
    }
    catch (err) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    
}