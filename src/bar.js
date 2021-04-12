import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function BarChart (props) {
    return (
        <Bar height={props.height} width={props.width} data={props.data} 
            options={props.options} />
    )
}