import React, { useContext } from 'react'
import AppContext from './context'
import { useRouteMatch } from 'react-router-dom'
import { match_player, test_pic } from './player_functions'
import Loading from './loading'
import NotFound from './not_found'
import PlayerDashboard from './player_dashboard'

export default function PlayerPage (props) {
    const context = useContext(AppContext)
    const match = useRouteMatch({path: '/player/:id', strict: true, sensitive: true})
    const { player } = match_player(context.players, match.params.id.split('-'))
 
    try {
        const nba = require('nba-api-client')
        const name = player.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const player_pic = nba.getPlayerID(name)
        const { pic_url } = test_pic(player_pic)
        
        if (!player) {
            return (
                <div>
                    <NotFound />
                </div>
            )
        }
        
        return (
            <>
                <PlayerDashboard url={pic_url} player={player} data={context.players} />
            </>
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


// notes: from lighthouse report I decreased the size of my players json object
// so that I would have better performance