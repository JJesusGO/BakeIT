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
        tablename: 'productos_imagenes'
    };

    const Producto_Imagen = sequalize.define(alias, cols, config);

    Producto_Imagen.associate = function(models){
        Producto_Imagen.belongsTo(models.Producto,{
            as: "producto",
            foreignKey: 'producto_id'
        });
        Producto_Imagen.belongsTo(models.Imagen,{
            as: "imagen",
            foreignKey: 'imagen_id'
        });
    }

    return Producto_Imagen;
};