#USE r0ux4pPtZh;

CREATE TABLE imagenes(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    url VARCHAR(500) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE permisos(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    edicion_usuarios BOOLEAN NOT NULL,
    PRIMARY KEY(id)   
);
CREATE TABLE awards(
   id INT UNSIGNED NOT NULL AUTO_INCREMENT,
   nombre VARCHAR(255) NOT NULL,
   descripcion TEXT NOT NULL, 
   PRIMARY KEY(id)
);
CREATE TABLE categorias(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE usuarios(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    permiso_id INT UNSIGNED NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    correo VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    imagen_id INT UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY (permiso_id) REFERENCES permisos(id),
    FOREIGN KEY (imagen_id) REFERENCES imagenes(id)
);
CREATE TABLE productos(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    tipo ENUM("postre","kit") NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria_id INT UNSIGNED NOT NULL,
    precio FLOAT(24) NOT NULL,
    elementos TEXT NOT NULL,
    porciones VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
CREATE TABLE carrito(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    usuario_id INT UNSIGNED NOT NULL,
    status INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE carrito_producto(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    carrito_id INT UNSIGNED NOT NULL,
    producto_id INT UNSIGNED NOT NULL,
    cantidad INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (carrito_id) REFERENCES carrito(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
CREATE TABLE productos_awards(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    producto_id INT UNSIGNED NOT NULL,
    award_id INT UNSIGNED NOT NULL,
    rating INT UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (award_id) REFERENCES awards(id)
);
CREATE TABLE productos_imagenes(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    producto_id INT UNSIGNED NOT NULL,
    imagen_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (imagen_id) REFERENCES imagenes(id)
);
CREATE TABLE ofertas(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    producto_id INT UNSIGNED NOT NULL,
    descuento FLOAT(24) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
CREATE TABLE recomendaciones(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    producto_id INT UNSIGNED NOT NULL,
    recomendado_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (recomendado_id) REFERENCES productos(id)
);

