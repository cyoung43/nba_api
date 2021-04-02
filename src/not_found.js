import React from 'react'

export default function NotFound () {
    return (
        <div className='flex-column' style={{
            justifyContent: 'center',
            alignText: 'center'
        }}>
            <h4 style={{
                alignText: 'center',
                padding: '1rem'
            }}>Sorry, we could not find the resource you requested!</h4>
            <div style={{
                padding: '2rem',
                alignContent: 'center'
            }}>
                <iframe src='https://giphy.com/embed/WNIFHdPPsj9BsKBx4T'
                    height='400rem' frameBorder='0' className='giphy-embed' 
                    allowFullScreen title='Basketball' />
            </div>
        </div>
    )
}