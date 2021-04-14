const player_filter = (players, team, position) => {
    const player_names = []

    Object.entries(players).map(player => {
        if (player[1].season === 'Career') {
            if (team && position) {
                if (player[1].team === team.label && player[1].position?.split(',')[0] === position.value) {
                    console.log(true)
                    player_names.push({
                        value: player[1].player_id,
                        label: player[1].name
                    })
                }
            }
            else if (team) {
                if (player[1].team === team.label) {
                    player_names.push({
                        value: player[1].player_id,
                        label: player[1].name
                    })
                }
            }
            else if (position) {
                if (player[1].position?.split(',')[0] === position.value || player[1].position?.split(',')[1] === position.value) {
                    player_names.push({
                        value: player[1].player_id,
                        label: player[1].name
                    })
                }
            }
            else {
                player_names.push({
                    value: player[1].player_id,
                    label: player[1].name
                })
            }
        }
        
        return null
    })

    player_names.sort((a, b) => (a.label > b.label ? 1 : -1))

    return { player_names }
}

const team_filters = (teams) => {
    const filter = []

    Object.entries(teams).map(team => {
        filter.push({
            value: team[1].abbreviation,
            label: team[1].name
        })

        return null
    })

    filter.sort((a, b) => (a.label > b.label ? 1 : -1))

    return { filter }
}

const position_filter = () => {
    const position_data =[
        { value: 'PG', label: 'Point Guard' },
        { value: 'C', label: 'Center' },
        { value: 'SF', label: 'Small Forward' },
        { value: 'SG', label: 'Shooting Guard' },
        { value: 'PF', label: 'Power Forward' }
    ]

    position_data.sort((a, b) => (a.label > b.label ? 1 : -1))
    console.log(position_data)

    return { position_data }
}

const player_url = (name) => {
    const url = name.split(' ').length === 2 ?
        `${name.toLowerCase().split(' ')[0]}-${name.toLowerCase().split(' ')[1]}` :
        `${name.toLowerCase().split(' ')[0]}-${name.toLowerCase().split(' ')[name.toLowerCase().split(' ').length - 1]}`
    return url
}

export { player_filter, team_filters, position_filter, player_url }