import React from 'react'

export default function Player () {
    const nba = require('nba-api-client')
    const player = nba.getPlayerID('LeBron James')

    return (
        <>
            All of the players will go here.
            <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${player.TeamID}/2019/260x190/${player.PlayerID}.png`} alt={`[Player name] headshot`} />
        </>
    )
}