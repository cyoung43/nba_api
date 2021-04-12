const match_player = (data, match) => {
    let player

    Object.entries(data).map(play => {
        let url = play[1].name.toLowerCase().split(/-| /)
        if (url.length === 2 && play[1].season === 'Career') {
            if (url[0] === match[0] && match[1] === url[1]) {
                player = play[1]
            }
        }
        else {
            if (url[0] === match[0] && url[url.length - 1] === match[match.length - 1] && play[1].season === 'Career') {
                player = play[1]
            }
        }

        return null
    })

    return { player }
}

const test_pic = (player_pic) => {
    let pic_url

    if (player_pic) {
        pic_url = `https://cdn.nba.com/headshots/nba/latest/1040x760/${player_pic.PlayerID}.png`
    }
    else {
        pic_url = './anonymous.png'
    }
    
    return { pic_url }
}

const logo_url = (data, player, mapper) => {
    let url

    Object.entries(data).map(play => {

        if (play[1].season === '2020-21' && play[1].name === player.name) {
            url = mapper[play[1].team_abbreviation]
        }
        
        return null
    })

    return { url }
}

const format_salary = (salary) => {
    let count = 1
    let updated_salary = ''
    
    salary.toString().split('').reverse().map(letter => {
        count % 3 === 0 ? updated_salary += letter + ',' : updated_salary += letter
        count += 1

        return null
    })
    
    updated_salary = updated_salary.split('').reverse().join('')

    if (updated_salary.split('')[0] === ',') {
        updated_salary = updated_salary.split('').slice(1, updated_salary.split('').length)
    }

    return { updated_salary }
}

const current_season = (data, player) => {
    let season

    Object.entries(data).map(play => {
        if (play[1].name === player.name && play[1].season === '2020-21') {
            season = play[1]
        }
        
        return null
    })

    return { season }
}

const bar_calculator = (player) => {
    // ['PPG', 'RPG' 'APG', '3PT%', 'FG%', 'FT%', 'Shooting Distance]
    const data_bar = [
        (player.points / player.games_played).toFixed(2),
        (player.total_rebounds / player.games_played).toFixed(2),
        (player.assists / player.games_played).toFixed(2),
        (player.three_point_percentage * 100).toFixed(2),
        (player.field_goal_percentage * 100).toFixed(2),
        (player.free_throw_percentage * 100).toFixed(2),
        player.shooting_distance
    ]

    return data_bar
}

export { match_player, test_pic, logo_url, format_salary, current_season, bar_calculator }