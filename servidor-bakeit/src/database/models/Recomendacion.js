module.exports = (sequelize, DataTypes) => {
    const alias = 'Recomendacion';
    const cols = {
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
        producto_id: {
            type: DataTypes.FLOAT(24),
            allowNull: false
        }
    };
    const config = {
        timestamps: false,
        tableName: 'recomendaciones'
    };

    const Recomendacion = sequelize.define(alias, cols, config);

    Recomendacion.associate = function (models) {
        Recomendacion.belongsTo(models.Producto,{
            as: "producto",
            foreignKey : 'producto_id'
        }),
        Recomendacion.belongsTo(models.Producto,{
            as: "recomendado",
            foreignKey : 'recomendado_id'
        })
    }

    return Recomendacion
};