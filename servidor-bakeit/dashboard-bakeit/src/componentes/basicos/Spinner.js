import React from 'react'
import "./Spinner.css"

export default function Spinner({altura = "15vh"}) {
    return (
        <div className="lds-heart mt-0" style={{height:altura}}><div></div></div>        
    )
}
