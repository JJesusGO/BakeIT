#USE rOux4pPtZh;

-- Imagenes - DONE
INSERT INTO imagenes (url) VALUES ('img-1628394473612.jpg'); -- Avatar Marcela
INSERT INTO imagenes (url) VALUES ('img-1628779268031.JPG'); -- Avatar Tania
INSERT INTO imagenes (url) VALUES ('img-1628794068834.png'); -- Avatar Jesús
INSERT INTO imagenes (url) VALUES ('img-pastelChocolate-1.png');
INSERT INTO imagenes (url) VALUES ('img-pastelChocolate-2.png');
INSERT INTO imagenes (url) VALUES ('img-pastelChocolate-3.png');
INSERT INTO imagenes (url) VALUES ('img-pastelChocolate-4.png');
INSERT INTO imagenes (url) VALUES ('img-eclair-1.png');
INSERT INTO imagenes (url) VALUES ('img-eclair-2.png');
INSERT INTO imagenes (url) VALUES ('img-eclair-3.png');
INSERT INTO imagenes (url) VALUES ('img-eclair-4.png');
INSERT INTO imagenes (url) VALUES ('img-macarons-1.png');
INSERT INTO imagenes (url) VALUES ('img-macarons-2.png');
INSERT INTO imagenes (url) VALUES ('img-macarons-3.png');
INSERT INTO imagenes (url) VALUES ('img-macarons-4.png');
INSERT INTO imagenes (url) VALUES ('img-profiterole-1.png');
INSERT INTO imagenes (url) VALUES ('img-profiterole-2.png');
INSERT INTO imagenes (url) VALUES ('img-profiterole-3.png');
INSERT INTO imagenes (url) VALUES ('img-profiterole-4.png');
INSERT INTO imagenes (url) VALUES ('img-tiramisu-1.png');
INSERT INTO imagenes (url) VALUES ('img-tiramisu-2.png');
INSERT INTO imagenes (url) VALUES ('img-tiramisu-3.png');
INSERT INTO imagenes (url) VALUES ('img-tiramisu-4.png');
INSERT INTO imagenes (url) VALUES ('img-payManzana-1.png');
INSERT INTO imagenes (url) VALUES ('img-payManzana-2.png');
INSERT INTO imagenes (url) VALUES ('img-payManzana-3.png');
INSERT INTO imagenes (url) VALUES ('img-payManzana-4.png');
INSERT INTO imagenes (url) VALUES ('img-flan-1.png');
INSERT INTO imagenes (url) VALUES ('img-flan-2.png');
INSERT INTO imagenes (url) VALUES ('img-flan-3.png');
INSERT INTO imagenes (url) VALUES ('img-flan-4.png');
INSERT INTO imagenes (url) VALUES ('img-birthday-1.png');
INSERT INTO imagenes (url) VALUES ('img-birthday-2.png');
INSERT INTO imagenes (url) VALUES ('img-birthday-3.png');
INSERT INTO imagenes (url) VALUES ('img-birthday-4.png');
INSERT INTO imagenes (url) VALUES ('img-aniversario-1.png');
INSERT INTO imagenes (url) VALUES ('img-aniversario-2.png');
INSERT INTO imagenes (url) VALUES ('img-aniversario-3.png');
INSERT INTO imagenes (url) VALUES ('img-aniversario-4.png');
INSERT INTO imagenes (url) VALUES ('img-sanValentin-1.png');
INSERT INTO imagenes (url) VALUES ('img-sanValentin-2.png');
INSERT INTO imagenes (url) VALUES ('img-sanValentin-3.png');
INSERT INTO imagenes (url) VALUES ('img-sanValentin-4.png');
INSERT INTO imagenes (url) VALUES ('img-navidad-1.png');
INSERT INTO imagenes (url) VALUES ('img-navidad-2.png');
INSERT INTO imagenes (url) VALUES ('img-navidad-3.png');
INSERT INTO imagenes (url) VALUES ('img-navidad-4.png');
INSERT INTO imagenes (url) VALUES ('img-all.jpg');
INSERT INTO imagenes (url) VALUES ('img-custards&puddings.png');
INSERT INTO imagenes (url) VALUES ('img-coldDesserts.png');
INSERT INTO imagenes (url) VALUES ('img-cookies.png');
INSERT INTO imagenes (url) VALUES ('img-cakes.png');
INSERT INTO imagenes (url) VALUES ('img-pays.png');
INSERT INTO imagenes (url) VALUES ('img-pastries.png');
INSERT INTO imagenes (url) VALUES ('img-kits.png');

-- Permisos - DONE
INSERT INTO permisos (nombre, edicion_usuarios) VALUES ('Administrador', 1);
INSERT INTO permisos (nombre, edicion_usuarios) VALUES ('Cliente', 0);

-- Categorías - DONE
INSERT INTO categorias (nombre, tipo, imagen_id) VALUES ('Natillas y pudines','postre',105);
INSERT INTO categorias (nombre, tipo, imagen_id) VALUES ('Postres fríos o helados','postre',106);
INSERT INTO categorias (nombre, tipo, imagen_id) VALUES ('Galletas','postre',107);
INSERT INTO categorias (nombre, tipo, imagen_id) VALUES ('Pasteles','postre',108);
INSERT INTO categorias (nombre, tipo, imagen_id) VALUES ('Pays','postre',109);
INSERT INTO categorias (nombre, tipo, imagen_id) VALUES ('Hojaldres y bollos','postre',112);
INSERT INTO categorias (nombre, tipo, imagen_id) VALUES ('Pareja','kit',111);
INSERT INTO categorias (nombre, tipo, imagen_id) VALUES ('Grupal','kit',111);

-- Usuarios - DONE
INSERT INTO usuarios (nombre, apellidos, permiso_id, fecha_nacimiento, correo, contrasena, imagen_id) VALUES ('Marcela', 'Barajas', 1, '2000-03-12', 'marcela@gmail.com', '$2a$10$tauMby3wn0jJDCktJZ1dD.8yD00VPie4hssLIrahX6fbTafNh4iba', 1);
INSERT INTO usuarios (nombre, apellidos, permiso_id, fecha_nacimiento, correo, contrasena, imagen_id) VALUES ('Tania', 'Tovar', 1, '1995-11-13', 'tania@gmail.com', '$2a$10$0ZfX4mKTZnV2f5tLjNkHAOPZ6Sr9eEVBYIdL4SJWLYbNJRTGgZzd2', 2);
INSERT INTO usuarios (nombre, apellidos, permiso_id, fecha_nacimiento, correo, contrasena, imagen_id) VALUES ('Jesus', 'Gutierrez', 1, '1996-04-11', 'jdj.gutierrezornelas@hotmail.com', '$2a$10$gTvS2UhYXQ7zEXhFtjTpg.zKQlJbjqKMeos3OT3kD2mCB5kxkgMsi', 3);

-- Productos - DONE
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('postre', 'Pastel de chocolate', 'El pastel de chocolate tradicional no necesita presentación. Pero quizá un poco de historia esté en orden. El origen del pastel de chocolate se remonta a 1764, cuando el Dr. James Baker descubrió cómo hacer chocolate moliendo granos de cacao entre dos enormes piedras de molino circulares. Su descubrimiento permitió que 1948 Pillsbury introdujera el sabor de lo que se convertiría el pastel más popular de la historia. Esta decadente delicia está destinada a ser un éxito sin importar el evento, después de todo, ¿quién dice que no a un pastel de chocolate?', 4, 485, 'Harina+Polvo de cacao+Levadura en polvo+Bicarbonato de sodio+Azúcar granulada+Aceite vegetal+Extracto de vainilla+Azúcar glass+Molde para hornear de 10"+Receta con instrucciones y consejos paso a paso', '12 rebanadas');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('postre', 'Éclair', 'El éclair, creado por el famoso chef francés Antonin Carême en la década de 1860, es definido como un bollo alargado de pasta choux, relleno de crema pastelera y típicamente cubierto con glaseado de chocolate. En la actualidad, se puede encontrar relleno con ingredientes modernos como el té matcha o la crema moka o decorado con fruta fresca y glaseado de frutas. Sin embargo, independientemente de su relleno y decorado, la base característica del éclair no ha cambiado, por lo que esta receta es ideal para preparar un éclair francés que cumpla con las expectativas del mismísimo chef Carême.', 6, 395, 'Harina+Maicena+Azúcar granulada+Chips de chocolate semidulce+Vaina de vainilla+2 mangas pasteleras reutilizables con una punta circular de 1/2" y una punta de estrella abierta de 16mm+Receta con instrucciones y consejos paso a paso', '18 éclairs');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('postre', 'Macarons', 'Los macarons son una delicia francesa presentada en forma de dos tapas hechas de harina de almendras cocidas al estilo merengue y entre las cuales se encuentra un relleno de crema o ganache. Las pequeñas galletas reconocidas por su delicioso sabor y variedad de colores cuya existencia data al siglo XVII no son sencillas de hacer, pero con un poco de ayuda y una receta bien escrita, hasta la tarea más complicada puede ser realizada a la perfección. ', 3, 455, 'Harina de almendra+Azúcar granulada+Azúcar glass+Extracto de vainilla+Cremor tártaro+Colorante alimenticio+Una bandeja para hornear rectangular de 22x33cm+Una manga pastelera reutilizable con punta circular de 1/2"+Receta con instrucciones y consejos paso a paso', '36 macarons');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('postre', 'Profiterole', 'El profiterole, una invención de un chef italiano llamado Panterelli, es un pastelillo relleno de crema cubierto de chocolate caliente. Recién salidos del horno, son una delicia en forma de conchas ligeras y aireadas, tan suaves por dentro que casi se derriten en la lengua y que una vez rellenas y servidas con salsa de chocolate se convierten en un delicioso regalo para el paladar. ¿Cómo podría alguien decirle que no a está receta?', 6, 410, 'Harina de almendra+Azúcar granulada+Azúcar glass+Extracto de vainilla+Cremor tártaro+Colorante alimenticio+Una bandeja para hornear rectangular de 22x33cm+Una manga pastelera reutilizable con punta circular de 1/2"+Receta con instrucciones y consejos paso a paso', '48 profiterole');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('postre', 'Tiramisú', 'El tiramisu, postre de origen italiano creado en 1960, es una delicia preparada con láminas de masa de bizcocho empapadas en café, las cuales se alternan con una crema compuesta de claras a punto de nieve mezcladas con un queso suave, azúcar y crema de leche líquida. Este postre frío, espolvoreado con cacao en polvo, café molido y azúcar glass, es la selección ideal para saborear un bocado fresco y exquisito.', 2, 480, 'Azúcar granulada+Harina+Maicena+Café+Ron dorado+Polvo de cacao+Una bandeja para hornear rectangular de 22x33cm+Una manga pastelera reutilizable con punta circular de 1/2"+Receta con instrucciones y consejos paso a paso', '12 porciones');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('postre', 'Pay de manzana', 'No hay regalo otoñal más icónico que el pay de manzana. Este reconocido pay es, como puede suponerse, una tarta en la que el ingrediente principal de relleno es la manzana. Originado en Inglaterra y adoptado por los estadounidenses, el pay de manzana es postre tradicional cuya mezcla de sabores lo definen como uno de los platillos más reconfortantes dentro del territorio americano. Manzana, azúcar, canela… ¿Cómo podríamos decir no?', 5, 485, 'Harina+Azúcar blanca+Azúcar morena+Canela, jengibre y nuez moscada+Molde para hornear de 9"+Rodillo de cocina+Receta con instrucciones y consejos paso a paso', '12 porciones');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('postre', 'Flan', 'El flan, un postre cuyo origen se remonta al Imperio Romano, es una delicia hecha de huevos, leche y azúcar con toques de vainilla, naranja, coco o café, que se hornea en un baño de agua en el horno debido a su delicada base. Este postre de textura cremosa y gelatinosa es fácilmente el postre latino más popular y lo ha sido durante muchas generaciones. ¡Simplemente es una receta que no se puede ignorar!', 1, 320, 'Leche condensada+Leche evaporada+Vainilla+Azúcar+Plato para pastel metálico de 9"+Molde para hornear de 10"+Receta con instrucciones y consejos paso a paso', '12 porciones');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('kit', 'Kit: ¡Feliz cumpleaños!', '¿Acaso vas a celebrar un cumpleaños? El Kit ¡Feliz cumpleaños! te ofrece los complementos necesarios para hacer de tu celebración una ocasión aún más memorable. ¡Festeja a lo grande con tu familia y amigos!', 8, 199, '12 gorros de fiesta+12 platos desechables decorados+Paquete de 20 velas de cumpleaños+20 globos multicolor+Paquete de confeti+Paquete de serpentinas', '12 personas');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('kit', 'Kit: ¡Feliz aniversario!', '¿Acaso vas a celebrar un aniversario? El Kit ¡Feliz aniversario! te ofrece los complementos necesarios para hacer de tu celebración una ocasión aún más memorable. ¡Sorprende a esa persona especial no solo con tus habilidades culinarias, sino también con una presentación excepcional!', 7, 319, '2 copas de cristal+2 platos para postre decorados+Ramo de rosas artificiales+5 globos dorados+5 globos plateados', '2 personas');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('kit', 'Kit: ¡Feliz San Valentín!', '¡San Valentín está a la vuelta de la esquina! El Kit ¡Feliz San Valentín! te ofrece los complementos necesarios para hacer de tu celebración una ocasión aún más memorable. Kit + Postre = ¡Éxito!', 7, 189, 'Caja en forma de corazón de 20 cm de largo+Ramo de rosas artificiales+Tarjeta de celebración+3 globos con forma de corazón', '2 personas');
INSERT INTO productos (tipo, nombre, descripcion, categoria_id, precio, elementos, porciones) VALUES ('kit', 'Kit: ¡Feliz Navidad!', '¡La Navidad está por llegar! El Kit ¡Feliz Navidad! te ofrece los complementos necesarios para hacer de tu celebración una ocasión aún más memorable; este te provee con todos los materiales y artículos necesario para hacer de tu delicia culinaria el mejor regalo para tu familia y amigos.', 8, 269, '12 cajas de regalo cuadradas de 12cm+12 tarjetas temáticas con sobre+12 etiquetas temáticas+Listón decorado y cordón de yute', '12 personas');

-- Productos_Imagenes - DONE
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (1, 4);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (1, 5);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (1, 6);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (1, 7);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (2, 8);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (2, 9);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (2, 10);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (2, 11);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (3, 12);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (3, 13);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (3, 14);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (3, 15);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (4, 16);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (4, 17);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (4, 18);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (4, 19);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (5, 20);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (5, 21);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (5, 22);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (5, 23);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (6, 24);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (6, 25);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (6, 26);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (6, 27);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (7, 28);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (7, 29);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (7, 30);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (7, 31);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (8, 32);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (8, 33);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (8, 34);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (8, 35);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (9, 36);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (9, 37);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (9, 38);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (9, 39);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (10, 40);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (10, 41);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (10, 42);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (10, 43);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (11, 44);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (11, 45);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (11, 46);
INSERT INTO productos_imagenes (producto_id, imagen_id) VALUES (11, 47);

-- Awards - DONE
INSERT INTO awards (nombre, descripcion) VALUES ('Maravilla Culinaria', 'Postre con mención honorífica por ser el más adquirido.');
INSERT INTO awards (nombre, descripcion) VALUES ('Complemento Ideal', 'Kit con mención honorífica por ser el más adquirido.');

-- Ofertas - DONE
INSERT INTO ofertas (producto_id, descuento) VALUES (1, 20);
INSERT INTO ofertas (producto_id, descuento) VALUES (3, 20);

-- Recomendaciones - DONE
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (1, 8);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (1, 9);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (1, 10);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (1, 11);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (2, 8);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (2, 9);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (2, 10);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (2, 11);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (3, 8);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (3, 9);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (3, 10);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (3, 11);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (4, 8);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (4, 9);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (4, 10);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (4, 11);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (5, 8);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (5, 9);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (5, 10);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (5, 11);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (6, 8);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (6, 9);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (6, 10);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (6, 11);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (7, 8);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (7, 9);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (7, 10);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (7, 11);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (8, 1);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (8, 2);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (8, 3);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (8, 4);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (9, 1);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (9, 2);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (9, 3);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (9, 4);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (10, 1);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (10, 2);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (10, 3);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (10, 4);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (11, 1);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (11, 2);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (11, 3);
INSERT INTO recomendaciones (producto_id, recomendado_id) VALUES (11, 4);

-- TABLAS SIN INFORMACION
-- Carrito - Pendiente
-- INSERT INTO carrito (usuario_id, status) VALUES (usuario_id, status);

-- Carrito_Producto
-- Pendiente: TODO
-- INSERT INTO carrito_producto (carrito_id, producto_id, cantidad) VALUES (carrito_id, producto_id, cantidad);

-- Productos_Award
-- Pendiente: TODO
-- INSERT INTO productos_awards (producto_id, award_id, rating) VALUES (producto_id, award_id, rating);

