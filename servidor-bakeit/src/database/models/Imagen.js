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
    Imagen.associate = function (models) {
        Imagen.belongsTo(models.Usuario), {
            as: 'imagen',
            foreignKey: 'imagen_id'
        }
    }

    return Imagen
};