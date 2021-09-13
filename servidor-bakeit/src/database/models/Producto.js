module.exports = (sequalize, DataTypes) => {
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
        tablename: 'productos'
    };

    const Producto = sequalize.define(alias, cols, config);

    Producto.associate = function(models) {
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
        Producto.belongsToMany(models.Producto,{
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
        })
    }

    return Producto;
};