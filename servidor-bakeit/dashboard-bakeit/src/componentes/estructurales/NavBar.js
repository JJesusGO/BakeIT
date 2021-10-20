import React from 'react'
import logo from "../../assets/img/logo.svg"

export default function NavBar() {
    return (
        <ul className="navbar-nav sidebar sidebar-dark bkg-amarillo">

            <a className="sidebar-brand d-flex flex-column align-items-center justify-content-center mb-5 mt-5" href="/">   
                <div className="mx-3 mt-3">
                    <img className="navbar-logo" src={logo} alt="logo-proyecto"/>
                </div>
                <p className="mt-0 mb-4">Dashboard</p>
            </a>

            <hr className="sidebar-divider mt-4" />

            <li className="nav-item">
                <a className="nav-link py-1" href="/"><b>Dashboard</b></a>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                <h5 className="txt-rojo">Paginas</h5>
            </div>

            <div className="container mt-3 p-0 m-0">
                <li className="nav-item">
                    <a className="nav-link py-1" href="/"><b>Panel 1</b></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link py-1" href="/"><b>Panel 2</b></a>
                </li>          
            </div>
            

        </ul>
    )
}
