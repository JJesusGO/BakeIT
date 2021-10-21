import usePeticion from './usePeticion';

const useProductos = (callback) => {        
    return usePeticion('products',callback);
}

export default useProductos;