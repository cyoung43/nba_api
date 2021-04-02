import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './img/favicon.ico'

export default function Navigator () {

    return (
        <bs.Navbar expand='lg' bg='dark' variant='dark'>
            <Link to='/'>
                <img src={logo} alt='NBA Logo' style={{
                    height: '2.5rem',
                    width: '2.5rem'
                }}/>
            </Link>
            <Link to='/' style={{
                textDecoration: 'none'
            }}>
                <bs.Navbar.Brand>
                    NBA Analytics
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls='basic-Navbar-Nav' />
            <bs.Navbar.Collapse id='basic-Navbar-Nav'>
                <bs.Nav className='mr-auto'>
                    <Link className='nav-link'>Players</Link>
                    <Link className='nav-link'>Compare Teams</Link>
                    <Link className='nav-link'>Live Scores</Link>            
                </bs.Nav>
                <bs.Form inline>
                <bs.FormControl type='text' placeholder='Search' className='mr-sm-2' />
                <bs.Button variant='outline-info'>Search</bs.Button>
                </bs.Form>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}