import React from 'react'
import "./Spinner.css"

export default function Spinner({color=""}) {
    return (
        <div className={"mt-0 lds-heart"+color}><div></div></div>        
    )
}
