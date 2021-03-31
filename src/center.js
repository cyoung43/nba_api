import React from 'react';
import AppContext from './context'

// import BottomScrollListener from 'react-bottom-scroll-listener';

export default function Center () {
    const context = React.useContext(AppContext)
    return (
        <>
            Center
        {/*<BottomScrollListener offset="100" onBottom={() => set_load_count(load_count + 10)}></BottomScrollListener>*/}
        </>       
    )
}
