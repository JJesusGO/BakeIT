const express = require('express');
const app = express();
const path = require('path');
const { log } = require('./src/herramientas');

const public = path.resolve(__dirname, './public');

//ROUTES
let routerMain = require('./routes/mainRoutes')
let routerProducts = require('./routes/productRoutes')

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//CONFIGURACIÓN
app.set("PUERTO", 3000);

//MIDDLEWARE
app.use(express.static(public));

//RUTAS
app.use('/', routerMain);

app.use('/', routerProducts);


const puerto = app.get('PUERTO') || 3000;
app.listen(puerto, () => log('Servidor inicializado en localhost:' + puerto));