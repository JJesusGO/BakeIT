import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import logo from '../../assets/img/logo.svg';
import Spinner from '../basicos/Spinner';

export default function Init() {    
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push('/home')
        }, 1500);
    },[history]);
    return (
        <div className="container-fluid vw-100 vh-100 bkg-amarillo p-5">
            <div className="d-flex justify-content-center align-items-center flex-column mt-5">
                <img className="mb-0" src={logo} alt="logo-proyecto"/>
                <Spinner altura="45vh"/>
            </div>            
        </div>
    )
}
