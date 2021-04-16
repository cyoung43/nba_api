const find_game = (data, team, date) => {
    let match = null

    Object.entries(data).map(game => {
        const game_date = `${game[1].date.split(' ')[1]}-${game[1].date.split(' ')[2]}`
        
        if (game[1].home_team === team || game[1].away_team === team) {
            if (game_date.split(',')[0] === date) {
                match = game[1]
            }
        }

        return null
    })

    return match
}

const find_stats = (data, boxscore) => {
    let match = null

    Object.entries(data).map(game => {

        if (game[1].index === boxscore) {
            match = game[1]
        }

        return null
    })

    return match
}

export { find_game, find_stats }