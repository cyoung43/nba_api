import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineChart (props) {

    return (
        <Line data={props.data} options={props.options} 
            height={props.height} width={props.width} />
    )
}