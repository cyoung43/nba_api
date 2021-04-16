import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import GameDashboard from './game_dashboard'
import Loading from './loading'
import NotFound from './not_found'
import { find_game, find_stats } from './game_functions'

export default function Game (props) {
    const context = useContext(AppContext)
    const match = useRouteMatch({path: '/team/:id/game/:gid', strict: true, sensitive: true})
    
    if (!match) {
        return (
            <NotFound />
        )
    }

    try {
        const games = context.games
        const schedule = context.schedule
        const team_id = match.params.id
        const game_id = match.params.gid
        const matched_game = find_game(schedule, team_id, game_id)

        if (!matched_game) {
            return (
                <NotFound />
            )
        }

        const stats = find_stats(games, matched_game.boxscore_index)
        
        return (
            <>
                <GameDashboard team={team_id} date={game_id} stats={stats} game={matched_game} />
            </>
        )
    }
    catch (err) {

        return (
            <Loading />
        )
    }
}