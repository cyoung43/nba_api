import React from 'react'
import AppContext from './context'


export default function Left () {
    const context = React.useContext(AppContext)
    console.log(context.season)

    return (
        <>
            <h5>NBA Teams</h5>
        </>
    )
}