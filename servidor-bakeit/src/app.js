const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const { log } = require('./herramientas/herramientas');

const public = path.join(__dirname, '../public');
const views = path.join(__dirname, './views');

//ROUTES
const main = require('./routes/mainRoutes');
const products = require('./routes/productRoutes');
const user = require('./routes/userRoutes');

//CONFIGURACIÓN
app.set("PUERTO", 3000);
app.set("view engine", "ejs");
app.set("views", views);

//MIDDLEWARE
app.use(express.static(public));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: "Secreto",
    resave: false,
    saveUninitialized: false
}));

//RUTAS
app.use('/', main);
app.use('/products', products);
app.use('/user', user);

const puerto = app.get('PUERTO') || 3000;
app.listen(puerto, () => log('Servidor inicializado en localhost:' + puerto));