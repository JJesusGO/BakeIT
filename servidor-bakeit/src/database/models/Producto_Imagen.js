module.exports = (sequalize,DataTypes) => {
    const alias = 'Producto_Imagen';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        producto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        imagen_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    };
    const config = {
        timestamps: false,
        tableName: 'productos_imagenes'
    };

    const Producto_Imagen = sequalize.define(alias, cols, config);

    return Producto_Imagen;
};