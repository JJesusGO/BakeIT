import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/img/logo.svg"
import {PagesContext} from "../../contexts/pages.context"

export default function NavBar() {

    const paginas = useContext(PagesContext);

    return (
        <ul className="navbar-nav sidebar sidebar-dark bkg-amarillo">

            <NavLink className="sidebar-brand d-flex flex-column align-items-center justify-content-center mb-5 mt-5" to="/">   
                <div className="mx-3 mt-3">
                    <img className="navbar-logo" src={logo} alt="logo-proyecto"/>
                </div>
                <p className="mt-0 mb-4">Dashboard</p>
            </NavLink>

            <hr className="sidebar-divider mt-4" />

            <li className="nav-item">                
                <NavLink className="nav-link ml-4" to="/home"> 
                    <div className="d-flex align-items-center justify-content-center w-75">                                                                   
                        <b className="pl-2">Dashboard</b>
                        <i className="fas fa-fw fa-tachometer-alt icon-dashboard ml-3"/>
                    </div>
                </NavLink>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                <h5 className="txt-rojo">Paginas</h5>
            </div>

            <div className="container mt-3 p-0 m-0">
                {paginas.map(pagina => {
                    return (
                        <li className="nav-item" key={pagina.id}>                
                            <NavLink className="nav-link py-1" to={pagina.url}> 
                                <div className="d-flex align-items-center justify-content-start w-75">                                           
                                    <i className={"fas fa-fw txt-blanco " + pagina.icon}></i>
                                    <b className="pl-2">{pagina.title}</b>
                                </div>
                            </NavLink>
                        </li>
                    );
                })}         
            </div>
            

        </ul>
    )
}
