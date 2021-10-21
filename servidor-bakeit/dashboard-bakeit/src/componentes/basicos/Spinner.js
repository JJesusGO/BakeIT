import React from 'react'
import "./Spinner.css"

export default function Spinner({color=""}) {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className={"mt-0 lds-heart"+color}><div></div></div>        
        </div>
        
    )
}
