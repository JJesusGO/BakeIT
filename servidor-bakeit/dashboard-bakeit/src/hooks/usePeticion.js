import { useEffect, useState } from 'react'

const usePeticion = (endpoint = "",callback=()=>{}) => {    
    const [cargando, setCargando] = useState(true)
    useEffect(() => {      
        fetch(`/api/${endpoint}`)
        .then(res => res.json())
        .then(data => {                        
            callback(data);
            setCargando(false);
        }); 
    // eslint-disable-next-line       
    },[endpoint]);
    return cargando;
}

export default usePeticion;