module.exports = (sequelize, DataTypes) => {
    let alias = 'Imagen';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING(500),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'imagenes'
    };

    const Imagen = sequelize.define(alias, cols, config);

    // Relaciones
    Imagen.associate = function(models) {
        Imagen.hasMany(models.Usuario, {
            as: 'usuario',
            foreignKey: 'imagen_id',
            timestamps: false
        });
        Imagen.belongsToMany(models.Producto, {
            as: "productos",
            through: "productos_imagenes",
            foreignKey: 'imagen_id',
            otherKey: "producto_id",
            timestamps: false
        })
    }

    return Imagen
};