import usePeticion from './usePeticion';

const useGenerales = (callback) => {        
    return usePeticion('generales',callback);
}

export default useGenerales