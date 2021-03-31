import React from 'react';
import * as bs from 'react-bootstrap'
import Top from './top'
import Left from './left'
import Bottom from './bottom'
import Center from './center'
import './App.scss'

function App() {

    return (
        <bs.Container fluid className='p-0 min-vh-100 d-flex flex-column'>
            <bs.Row noGutters className='flex-grow-0 flex-shrink-0 shadow-sm'>
            <bs.Col >
                <Top />
            </bs.Col>
            </bs.Row>
            <bs.Row noGutters className='flex-grow-1'>
            <bs.Col md='2' className='shadow-sm' style={{backgroundColor: '#FFFFFF'}}>
                <Left />
            </bs.Col>
            <bs.Col md='8'>
                <Center />
            </bs.Col>
            <bs.Col md='2' className='shadow-sm' style={{backgroundColor: '#FFFFFF'}}>
                
            </bs.Col>
            </bs.Row>
            <bs.Row className='no-gutters'>
            <bs.Col style={{
                backgroundColor: '#343a40',
                color: '#FFFFFF'
            }}>
                <Bottom />
            </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}

export default App