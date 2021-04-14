import React from 'react'
import * as bs from 'react-bootstrap'

export default function NotFound () {
    return (
        <bs.Container>
            <bs.Row>
                <bs.Col md='12'>
                    <h4 className='text-center' style={{
                        alignText: 'center',
                        paddingTop: '3rem',
                    }}>Sorry, we could not find the resource you requested!</h4>
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col md='3'/>
                <bs.Col md='5'>
                    <iframe src='https://giphy.com/embed/WNIFHdPPsj9BsKBx4T'
                        height='400rem' frameBorder='0' className='giphy-embed' 
                        allowFullScreen title='Basketball' />
                </bs.Col>
                <bs.Col md='3' />
            </bs.Row>
        </bs.Container>
    )
}