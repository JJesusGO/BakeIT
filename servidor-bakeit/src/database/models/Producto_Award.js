module.exports = (sequalize, DataTypes) => {
    const alias = 'Producto_Award';
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
        award_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    };
    const config = {
        timestamps: false,
        tableName: 'productos_awards'
    };

    const Producto_Award = sequalize.define(alias, cols, config);
    // Relaciones
    Producto_Award.associate = function (models) {
        Producto_Award.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        });     
        Producto_Award.belongsTo(models.Award, {
            as: 'award',
            foreignKey: 'award_id'
        });     
    }

    return Producto_Award;
};