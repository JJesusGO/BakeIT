module.exports = (sequalize, DataTypes) => {
    let alias = 'Usuario';
    let cols = {
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
        permiso_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        apellidos: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        contrasena: {
            type: DataTypes.STRING(225),
            allowNull: false,
        },

        imagen_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    };
    let config = {
        timestamps: false,
        tablename: 'usuarios'
    };

    const Usuario = sequalize.define(alias, cols, config);

    // Relaciones comentadas para que funcione el login
    /*
    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Permiso), {
            as: 'permiso',
            foreignKey: 'permiso_id'
        }

        Usuario.belongsTo(models.Imagen), {
            as: 'imagen',
            foreignKey: 'imagen_id'
        }

        Usuario.hasMany(models.Carrito), {
            as: 'carritos',
            foreignKey: 'usuario_id'
        }
        
    }*/

    return Usuario
};