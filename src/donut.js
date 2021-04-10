import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export default function DonutChart (props) {

    return (
        <Doughnut data={props.data} options={props.options} 
            height={props.height} width={props.width} />
    )
}