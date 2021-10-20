import React from 'react'
import NavBar from '../estructurales/NavBar'

export default function BaseApp({children = null}) {
    return (
        <div id="wrapper">
            <NavBar/>
            <div id="content-wrapper" className="d-flex flex-column">
                {children}
            </div>
        </div>            
    )
}
