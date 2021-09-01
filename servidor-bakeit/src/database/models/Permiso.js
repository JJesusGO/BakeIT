module.exports = (sequelize, DataTypes) => {
    let alias = 'Permiso';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        edicion_usuarios: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'permisos'
    };

    const Permiso = sequelize.define(alias, cols, config);

    // Relaciones
    Permiso.associate = function (models) {
        Permiso.hasMany(models.Usuario, {
            as: 'usuarios',
            foreignKey: permiso_id
        })
    }

    return Permiso
};