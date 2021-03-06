import React from 'react';
import './App.scss'
import * as bs from 'react-bootstrap'
import Top from './top'
import Left from './left'
import Bottom from './bottom'
import Center from './center'
import Team from './team'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Compare from './compare'
import Scores from './scores'
import Player from './players'
import PlayerPage from './player_page'
import Right from './right'
import Game from './game'

function App () {

    return (
        <bs.Container fluid className='p-0 min-vh-100 d-flex flex-column'>
            <Router>
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
                    <Switch>
                        <Route path='/team/:id/game/:gid'>
                            <Game />
                        </Route>
                        <Route path='/team'>
                            <Team />
                        </Route>
                        <Route path='/player/:id'>
                            <PlayerPage />
                        </Route>
                        <Route path='/player'>
                            <Player />
                        </Route>
                        <Route path='/compare'>
                            <Compare />
                        </Route>
                        <Route path='/scores'>
                            <Scores />
                        </Route>
                        <Route path='/'>
                            <Center />
                        </Route>
                    </Switch>
                </bs.Col>
                <bs.Col md='2' className='shadow-sm' style={{backgroundColor: '#FFFFFF'}}>
                    <Right /> 
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
            </Router>
        </bs.Container>
    )
}

export default App