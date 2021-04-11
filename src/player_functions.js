const match_player = (data, match) => {
    let player

    Object.entries(data).map(play => {
        let url = play[1].name.toLowerCase().split(' ')
        if (url.length === 2 && play[1].season === 'Career') {
            if (`${url[0]} ${url[1]}` === `${match[0]} ${match[1]}`) {
                player = play[1]
            }
        }
        else {
            if (`${url[0]} ${url[url.length - 1]}` === `${match[0]} ${match[1]}` && play[1].season === 'Career') {
                player = play[1]
            }
        }

        return null
    })

    return { player }
}

export { match_player }