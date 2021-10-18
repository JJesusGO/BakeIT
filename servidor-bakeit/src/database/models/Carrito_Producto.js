module.exports = (sequelize, DataTypes) => {
    let alias = 'Carrito_Producto';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        carrito_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        producto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'carrito_producto'
    };
    

    const Carrito_Producto = sequelize.define(alias, cols, config);

    // Relaciones
    Carrito_Producto.associate = function (models) {
        Carrito_Producto.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        });     
        Carrito_Producto.belongsTo(models.Carrito, {
            as: 'carrito',
            foreignKey: 'carrito_id'
        });     
    }

    return Carrito_Producto
};