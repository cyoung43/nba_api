import React, { useContext, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import AppContext from './context'
import { get_wins } from './right_functions'
import { team_names} from './mapper'
import * as bs from 'react-bootstrap'
import RightData from './right_data'

export default function Right () {
    const context = useContext(AppContext)
    const match = useRouteMatch({path: '/team/:id', strict: true, sensitive: true})
    const [showMore, setShowMore] = useState(25)
    let schedule

    try {
        schedule = context.schedule
        const team_id = match.params.id
        const { games } = get_wins(schedule, team_id)
        let wins = 0
        let losses = 0
        
        games.map(game => {
            if (game.result === 'W') {
                wins += 1
            }
            else {
                losses += 1
            }

            return null
        })

        return (
            <div style={{
                paddingBottom: '2rem'
            }}>
                <h6 className='text-center' style={{
                    paddingTop: '1.5rem'
                }}>{team_names[team_id][0]} Schedule</h6>
                <hr style={{
                    width: '75%'
                }}/>
                <h6 className='text-center'>
                    {wins}-{losses}
                </h6>
                <RightData games={games} size={showMore} team={team_id} />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '1.5rem'
                }}>
                    { showMore === 25 ?
                        <bs.Button variant='outline-dark' size='sm' onClick={() => {setShowMore(games.length)} }>Show More</bs.Button> :
                        <bs.Button variant='outline-dark' size='sm' onClick={() => {setShowMore(25)}}>Show Less</bs.Button>


                    }
                </div>
            </div>
        )
    }
    catch (err) {
        return (
            <>
            </>
        )
    }
}