module.exports = (sequalize, DataTypes) => {
    const alias = 'Award';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    };
    const config = {
        timestamps: false,
        tableName: 'awards'
    };

    const Award = sequalize.define(alias, cols, config);

    Award.associate = function(models) {
        Award.belongsToMany(models.Producto, {
            as: "productos",
            through: "productos_awards",
            foreignKey: 'award_id',
            otherKey: "producto_id",
            timestamps: false
        })
    }

    return Award;
};