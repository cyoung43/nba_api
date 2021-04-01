import React from 'react'
import AppContext from './context'


export default function Left () {
    const context = React.useContext(AppContext)
    let team

    try {
        team = context.season
        console.log(team)

        return (
            <>
                <h5 style={{
                    textAlign: 'center',
                    paddingTop: '1rem'
                }}>NBA Teams</h5>
                <hr style={{
                    width: '75%'
                }}/>
                <div style={{
                    fontSize: '.8rem',
                    paddingLeft: '1rem',
                    paddingBottom: '1rem'
                }}>
                    {
                        Object.entries(team.name).map(name => {
                            console.log(name)
                            return (
                                <>
                                    <strong>{name[0]}: </strong>{name[1]} <br />
                                </>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    catch(err) {
        console.log(err)
        return (
            <>
                Teams not loading...
            </>
        )
    }
}