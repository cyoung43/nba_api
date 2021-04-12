import React from 'react'
import { Radar } from 'react-chartjs-2'

export default function RadarChart (props) {
    
    return (
        <Radar height={props.height} width={props.width} 
            data={props.data} options={props.options} />
    )
}