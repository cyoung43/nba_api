const get_wins = (data, id) => {
    let games = []

    Object.entries(data).map(game => {
        if (game[1].away_team === id || game[1].home_team === id) {
            let date = `${game[1].date.split(' ')[1]} ${game[1].date.split(' ')[2]}`
            let new_game = {
                home_team: game[1].home_team,
                team: game[1].home_team === id ? game[1].home_team : game[1].away_team,
                datetime: game[1].datetime,
                date: `${date.split(',')[0]}`
            }

            if (game[1].home_team === id) {
                new_game.opponent = game[1].away_team
                new_game.points_allowed = game[1].points_allowed
                new_game.points_scored = game[1].points_scored
                new_game.result = new_game.points_scored > new_game.points_allowed ? 'W' : 'L'
            }
            else {
                new_game.opponent = game[1].home_team
                new_game.points_allowed = game[1].points_scored
                new_game.points_scored = game[1].points_allowed
                new_game.result = new_game.points_scored > new_game.points_allowed ? 'W' : 'L'
            }

            games.push(new_game)
        }

        return null
    })

    games.sort((a, b) => (a.datetime > b.datetime ? 1 : -1))

    return { games }
}

export { get_wins }