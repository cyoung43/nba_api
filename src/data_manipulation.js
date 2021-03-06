const score_data = (data, id) => {
    let scores = []
    let games = []
    let opponent_scores = []
    let opponent_name = []

    Object.entries(data).map(game => {
        if (game[1].away_team === id || game[1].home_team === id) {
            let new_game = {
                points_allowed: game[1].points_allowed,
                points_scored: game[1].points_scored,
                datetime: game[1].datetime
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

    for (const {points_scored, points_allowed, opponent} of games) {
        scores.push(points_scored)
        opponent_scores.push(points_allowed)
        opponent_name.push(opponent)
    }

    return { 
        scores, 
        opponent_scores, 
        opponent_name
    }
}

const team_points = (team, opponent, games) => {
    const team_pts = (team / games).toFixed(2)
    const opponent_pts = (opponent / games).toFixed(2)

    return {
        team_pts,
        opponent_pts
    }
}

const other_stats = (rebounds, assists, steals, turnovers, games) => {
    const rpg = (rebounds / games).toFixed(2)
    const apg = (assists / games).toFixed(2)
    const spg = (steals / games).toFixed(2)
    const tpg = (turnovers / games).toFixed(2)

    return [
        [rpg, 'rpg', 'Rebounds'],
        [apg, 'apg', 'Assists'],
        [spg, 'spg', 'Steals'],
        [tpg, 'tpg', 'Turnovers']
    ]
}

const shooting_percentages = (twos, threes, fg, ft, team) => {
    const labels = [`${team} 2PT%`, `${team} 3PT%`, `${team} FG%`, `${team} FT%`]
    const more_labels = ['Two Point Percentage', 'Three Point Percentage', 'Field Goal Percentage', 'Free Throw Percentage']
    return [
        [twos, threes, fg, ft],
        labels,
        more_labels
    ]
}

export { score_data, team_points, other_stats, shooting_percentages }