const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname, './public');

//CONFIGURACIÓN
app.set("PUERTO",3000);

//MIDDLEWARE
app.use(express.static(publicPath));

//RUTAS
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});
app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.get('/product-cart', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});
app.get('/product-detail', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

const puerto = app.get('PUERTO') || 3000;
app.listen(puerto, () => console.log('Servidor inicializado en localhost:'+puerto)); 