import usePeticion from './usePeticion';

const useLatestProducto = (callback) => {        
    return usePeticion('products/latest',callback);
}

export default useLatestProducto;