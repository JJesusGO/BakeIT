import usePeticion from './usePeticion';

const useUsuarios = (callback) => {        
    return usePeticion('users',callback);
}

export default useUsuarios;