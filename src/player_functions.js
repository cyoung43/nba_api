import { name_mapper } from './mapper'

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
        pic_url = null
    }
    
    return { pic_url }
}

const logo_url = (data, player, mapper) => {
    let url

    Object.entries(data).map(play => {

        if (play[1].season === '2020-21' && play[1].name === player.name) {
            if (play[1].team_abbreviation !== 'TOT') {
                url = mapper[play[1].team_abbreviation]
            }
            else {
                let team = play[1].team.replace(/\s+/g, '')
                url = name_mapper[team]
            }
        }
        
        return null
    })

    return { url }
}

const format_salary = (salary) => {
    let count = 1
    let updated_salary = ''

    if (!salary) {
        let updated_salary = 0
        return { updated_salary }
    }
    
    salary.toString().split('').reverse().map(letter => {
        count % 3 === 0 ? updated_salary += letter + ',' : updated_salary += letter
        count += 1

        return null
    })
    
    updated_salary = updated_salary.split('').reverse().join('')

    if (updated_salary.split('')[0] === ',') {
        updated_salary = updated_salary.split('').slice(1, updated_salary.split('').length)
    }

    return updated_salary
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
        player.shooting_distance
    ]

    return data_bar
}

const radar_calculator = (player) => {
    const data_radar = [
        (player.three_point_percentage).toFixed(2),
        (player.two_point_percentage).toFixed(2),
        (player.field_goal_percentage).toFixed(2),
        (player.field_goal_perc_zero_to_three_feet).toFixed(2),
        (player.field_goal_perc_three_to_ten_feet).toFixed(2),
        (player.field_goal_perc_ten_to_sixteen_feet).toFixed(2),
        (player.field_goal_perc_sixteen_foot_plus_two_pointers).toFixed(2),
        (player.three_point_attempt_rate).toFixed(2),
        (player.true_shooting_percentage).toFixed(2)
    ]

    return data_radar
}

const card_data = (player) => {
    const data_card = [
        {value: player.usage_percentage, label: 'Usage Percentage', id: 'usage-pt'},
        {value: player.win_shares, label: 'Win Shares', id: 'win-sh'},
        {value: player.value_over_replacement_player, label: 'Value Over Replacement', id: 'val-over'},
        {value: player.box_plus_minus, label: 'Box Plus Minus', id: 'box-p'}
    ]

    return { data_card }
}

const money_data = (player) => {

    const data_money = [
        {
            value: format_salary((player.salary / player.field_goals).toFixed(0)),
            label: 'Cost Per Made Shot',
            id: 'cp-m'
        },
        {
            value: format_salary((player.salary / (player.field_goal_attempts - player.field_goals)).toFixed(0)),
            label: 'Cost Per Missed Shot',
            id: 'cp-s'
        },
        {
            value: format_salary((player.salary / player.games_played).toFixed(0)),
            label: 'Cost Per Game Played',
            id: 'cp-g'
        },
        {
            value: format_salary((player.salary / player.points).toFixed(0)),
            label: 'Cost Per Point Scored',
            id: 'cp-p'
        }
    ]

    return { data_money }
}

export { match_player, test_pic, logo_url, format_salary, current_season, bar_calculator, radar_calculator, card_data, money_data}