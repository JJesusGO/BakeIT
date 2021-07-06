const productos = [
];
const agregarProducto = ({nombre,descripcion,precio})=>{
    productos.push({nombre,descripcion,precio});
}
const editarProducto = (index,{nombre,descripcion,precio})=>{
    productos[index] = {nombre,descripcion,precio};
}

module.exports = {productos,agregarProducto,editarProducto};