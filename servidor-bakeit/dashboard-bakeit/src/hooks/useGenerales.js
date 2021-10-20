import { useEffect, useState } from 'react'

const useGenerales = (callback) => {    
    const [cargando, setCargando] = useState(true)
    useEffect(() => {      
        fetch('/api/generales')
        .then(res => res.json())
        .then(data => {                        
            callback(data);
            setCargando(false);
        });        
    },[]);

    return cargando;
}

export default useGenerales