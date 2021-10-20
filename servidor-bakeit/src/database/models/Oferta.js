module.exports = (sequelize, DataTypes) => {
    let alias = 'Oferta';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        producto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        descuento: {
            type: DataTypes.FLOAT(24),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'ofertas'
    };

    const Oferta = sequelize.define(alias, cols, config);

    // Relaciones
    Oferta.associate = function (models) {
        Oferta.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: 'producto_id'
        })
    }

    return Oferta
};