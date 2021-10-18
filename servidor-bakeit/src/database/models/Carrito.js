module.exports = (sequelize, DataTypes) => {
    let alias = 'Carrito';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        // El status es un INT. Si va a ser una referencia a un ID, nos falta crear la tabla status.
        status: {
            type: DataTypes.STRING(64),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'carrito'
    };

    const Carrito = sequelize.define(alias, cols, config);

    // Relaciones
    Carrito.associate = function (models) {
        Carrito.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id',
            timestamps: false
        })
        /*Carrito.belongsToMany(models.Producto, {
            as: 'productos',
            through: 'carrito_producto',
            foreignKey: 'carrito_id',
            otherKey: 'producto_id',
            timestamps: false
        })*/
        Carrito.hasMany(models.Carrito_Producto, {
            as: 'pedidos',            
            foreignKey: 'carrito_id',
            timestamps: false
        })
        Carrito.eliminar = async (id)=>{
            return new Promise(async (callback)=>{
                await models.Carrito_Producto.destroy({where : {carrito_id : id}});
                await Carrito.destroy({where : {id}});
                callback(true);
            });            
        }
    }

    return Carrito
};