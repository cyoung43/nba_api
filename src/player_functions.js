const match_player = (data, match) => {
    let player

    Object.entries(data).map(play => {
        let url = play[1].name.toLowerCase().split(/-| /)
        if (url.length === 2 && play[1].season === 'Career') {
            if (url[0] == match[0] && match[1] == url[1]) {
                player = play[1]
            }
        }
        else {
            if (match[0] === url[0]) {
                console.log('this is the one to check')
            }
            if (url[0] == match[0] && url[url.length - 1] == match[match.length - 1] && play[1].season === 'Career') {
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

export { match_player, test_pic }