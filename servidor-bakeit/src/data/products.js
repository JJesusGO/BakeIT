const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

let productos = [];

const cargarProductos = ()=>{
    productos = JSON.parse(fs.readFileSync( path.join(__dirname,'../data/products.json'), 'utf8')); 
}
const guardarProductos = ()=>{
    fs.writeFileSync(path.join(__dirname,'../data/products.json'), JSON.stringify(productos));
}
const agregarProducto = (contenido)=>{
    id = uniqid();
    productos.push({
        ...contenido,
        id
    });
    guardarProductos();
}
const editarProducto = (id,contenido)=>{
    const index = productos.findIndex(p => p.id === id);
    if(index >= 0){
        productos[index] = {
            ...productos[index], 
            ...contenido
        };    
        guardarProductos();
    }
}
const eliminarProducto = (id)=>{
    const index = productos.findIndex(p => p.id === id);
    if(index >= 0){
        productos.splice(index,1);
        guardarProductos();
    }
}

cargarProductos();

module.exports = {
    productos,
    agregarProducto,
    editarProducto,
    guardarProductos,
    eliminarProducto
};