const { eliminar } = require("../../herramientas/herramientas");
const path = require("path");

module.exports = (sequelize, DataTypes) => {

    const alias = 'Producto';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        tipo: {
            type: DataTypes.ENUM("postre", "kit"),
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        categoria_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        precio: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        elementos: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        porciones: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    };
    const config = {
        timestamps: false,
        tableName: 'productos'
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {

        Producto.eliminar = async (id) => {

            const Imagen = models.Imagen;
            const Producto_Imagen = models.Producto_Imagen;
            const Producto_Award = models.Producto_Award;
            const Carrito_Producto = models.Carrito_Producto;


            const [producto, placeholder, producto_imagenes] = await Promise.all([
                Producto.findByPk(id, { include: ["imagenes"] }),
                Imagen.findOne({ where: { url: process.env.PLACEHOLDER_IMG } }),
                Producto_Imagen.findAll({ where: { producto_id: id } })
            ]);
            producto.imagenes.forEach(async (imagen) => {
                if (imagen.url != process.env.PLACEHOLDER_IMG)
                    eliminar(path.join(__dirname, "../../../public/data/products/" + imagen.url));
            });
            const eliminar_imagenes = producto_imagenes.map(imagen => imagen.imagen_id);

            await Promise.all([
                Producto_Imagen.destroy({
                    where: { producto_id: id }
                }),
                Producto_Award.destroy({
                    where: { producto_id: id }
                }),
                Carrito_Producto.destroy({
                    where: { producto_id: id }
                })
            ]);
            await Promise.all([
                ...eliminar_imagenes.map(imagenid => {
                    if (imagenid != placeholder.id)
                        return Imagen.destroy({
                            where: { id: imagenid }
                        });
                    return null;
                }),
                Producto.destroy({
                    where: { id },
                })
            ]);

        }
        Producto.belongsTo(models.Categoria, {
            as: 'categoria',
            foreignKey: 'categoria_id'
        });
        Producto.belongsToMany(models.Producto, {
            as: "awards",
            through: "productos_awards",
            foreignKey: 'producto_id',
            otherKey: "award_id",
            timestamps: false
        });
        Producto.belongsToMany(models.Imagen, {
            as: "imagenes",
            through: "productos_imagenes",
            foreignKey: 'producto_id',
            otherKey: "imagen_id",
            timestamps: false
        });
        Producto.belongsToMany(models.Producto, {
            as: "recomendados",
            through: "recomendaciones",
            foreignKey: 'producto_id',
            otherKey: "recomendado_id",
            timestamps: false
        });
        Producto.belongsToMany(models.Producto, {
            as: "recomendado",
            through: "recomendaciones",
            foreignKey: 'recomendado_id',
            otherKey: "producto_id",
            timestamps: false
        });
        Producto.belongsToMany(models.Carrito, {
            as: 'carritos',
            through: 'carrito_producto',
            foreignKey: 'producto_id',
            otherKey: 'carrito_id',
            timestamps: false
        });
        Producto.hasOne(models.Oferta, {
            as: 'ofertas',
            foreignKey: 'producto_id',
            timestamps: false
        });
    }

    return Producto;
};