import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loading (props) {
    return (
        <>
            {
                props.header === 'Teams' ?
                <h5 style={{
                    padding: '1rem',
                    alignText: 'center'
                }}>{props.header} Loading...</h5> :
                <div className='flex-column' style={{
                    justifyContent: 'center'
                }}>
                    <br /><br />
                    <h3 style={{
                        padding: '1rem',
                        alignText: 'center',
                        alignContent: 'center'
                    }}>{props.header} Loading... <Spinner animation='border' variant='secondary' /></h3>
                </div>
            }
        </>
    )
}