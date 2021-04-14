import React from 'react'
import nike from './img/nike-1-logo-pack/nike-1-logo-png-transparent.png'

export default function Home () {
    return (
        <div className='m-2'>
            <h2 style={{
                textAlign: 'center',
                paddingTop: '2rem'
            }}>Welcome to NBA Analytics!</h2>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '2rem'
            }}>
                <img src={nike} alt='Logo' style={{
                    height: '20rem'
                }}/>
            </div>
        </div>
    )
}