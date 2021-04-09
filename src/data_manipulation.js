const score_data = function (data, id) {
    let scores = []
    let opponent_scores = []
    let opponent = []

    // TO DO: sorting array based on game date (datetime)

    Object.entries(data).map(game => {
        if (game[1].away_team === id || game[1].home_team === id) {
            scores.push(game[1].points_scored)
            opponent_scores.push(game[1].points_allowed)

            if (game[1].away_team !== id) {
                opponent.push(game[1].away_team)
            }
            else {
                opponent.push(game[1].home_team)
            }
        }

        return null
    })

    return { 
        scores, 
        opponent_scores, 
        opponent
    }
}

export { score_data }