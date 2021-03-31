import React from 'react'
import * as bs from 'react-bootstrap'

export default function Bottom (pros) {
    return (
        <bs.Container>
            <bs.Row>
                <bs.Col>
                    <p className="text-center">{'\u00A9'} NBA Analytics</p>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}