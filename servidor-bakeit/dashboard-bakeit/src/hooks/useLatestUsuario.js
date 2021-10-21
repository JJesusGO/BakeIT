import usePeticion from './usePeticion';

const useLatestUsuario = (callback) => {        
    return usePeticion('users/latest',callback);
}

export default useLatestUsuario;