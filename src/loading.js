import React from 'react'
import * as bs from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Loading (props) {
    return (
        <bs.Container style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>
            <div className='align-middle' style={{
                position: 'absolute',
                top: '6rem'
            }}>
                <FontAwesomeIcon icon={faSpinner} spin size='3x' className='align-middle' />
            </div>
        </bs.Container>
    )
}