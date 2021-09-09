module.exports = (sequalize,DataTypes) => {
    const alias = 'Usuario';
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
        tablename: 'awards'
    };

    const Award = sequalize.define(alias, cols, config);

    Award.associate = function (models) {
        Award.belongsToMany(models.Producto,{
            as : "productos",
            through : "productos_awards",
            foreignKey: 'award_id',
            otherKey: "producto_id"
        })
    }

    return Award;
};