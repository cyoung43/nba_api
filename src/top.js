import React from 'react'
import * as bs from 'react-bootstrap'
//import AppContext from './context'

export default function Top () {
    //const context = React.useContext(AppContext)

    return (
        <bs.Navbar expand='lg' bg='dark' variant='dark'>
            <bs.Navbar.Brand >
                NBA Analytics
            </bs.Navbar.Brand>
        
        <bs.Navbar.Toggle aria-controls='basic-Navbar-Nav' />
        <bs.Navbar.Collapse id='basic-Navbar-Nav'>
            <bs.Nav className='mr-auto'>
                First Item Second Item Third Item              
            </bs.Nav>
            <bs.Form inline>
            <bs.FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <bs.Button variant='outline-info'>Search</bs.Button>
            </bs.Form>
        </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}