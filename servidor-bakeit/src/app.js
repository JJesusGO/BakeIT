const express = require('express');
const app = express();
const path = require('path');
const { log } = require('./herramientas/herramientas');

const public = path.join(__dirname, '../public');
const views  = path.join(__dirname, './views');

//ROUTES
const main     = require('./routes/mainRoutes');
const products = require('./routes/productRoutes');
const editProducts = require('./routes/editProductsRoutes');

//CONFIGURACIÓN
app.set("PUERTO", 3000);
app.set("view engine", "ejs");
app.set("views",views);

//MIDDLEWARE
app.use(express.static(public));

//RUTAS
app.use('/', main);
app.use('/', products);
app.use('/edit-products',editProducts);


const puerto = app.get('PUERTO') || 3000;
app.listen(puerto, () => log('Servidor inicializado en localhost:' + puerto));