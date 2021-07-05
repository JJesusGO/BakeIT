const productos = [
];
const agregarProducto = ({nombre,descripcion,precio})=>{
    productos.push({nombre,descripcion,precio});
}

module.exports = {productos,agregarProducto};