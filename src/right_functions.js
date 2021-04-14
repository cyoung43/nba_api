const get_wins = (data, id) => {
    let games = []

    Object.entries(data).map(game => {
        if (game[1].away_team === id || game[1].home_team === id) {
            let date = `${game[1].date.split(' ')[1]} ${game[1].date.split(' ')[2]}`
            let new_game = {
                points_allowed: game[1].points_allowed,
                home_team: game[1].home_team,
                points_scored: game[1].points_scored,
                datetime: game[1].datetime,
                date: `${date.split(',')[0]}`,
                result: game[1].points_scored > game[1].points_allowed ? 'W' : 'L',
            }

            if (game[1].away_team !== id) {
                new_game.opponent = game[1].away_team
            }
            else {
                new_game.opponent = game[1].home_team
            }

            games.push(new_game)
        }

        return null
    })

    games.sort((a, b) => (a.datetime > b.datetime ? 1 : -1))

    return { games }
}

export { get_wins }