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
    Imagen.registrar = async (imagenes) => {
        return new Promise((callback) => {

            let imagenesGuardadas = [];

            const guardarImagen = (imagenGuardada, index) => {
                imagenesGuardadas[index] = (imagenGuardada) ? imagenGuardada.id : -1;
                let n = 0;
                for (let i = 0; i < imagenesGuardadas.length; i++)
                    if (imagenesGuardadas[i])
                        n++;
                if (n == imagenes.length)
                    callback(imagenesGuardadas);
            };
            imagenes.forEach((imagen, index) => {
                if (imagen == null)
                    guardarImagen(null, index);
                else if (imagen == process.env.PLACEHOLDER_IMG)
                    Imagen.findOne({
                        where: {
                            url: process.env.PLACEHOLDER_IMG
                        }
                    }).then((imagen) => {
                        guardarImagen(imagen, index);
                    });
                else
                    Imagen.create({
                        url: imagen
                    }).then(imagenGuardada => {
                        guardarImagen(imagenGuardada, index);
                    });
            });

        });
    }

    // Relaciones
    Imagen.associate = function (models) {
        Imagen.hasMany(models.Usuario, {
            as: 'usuario',
            foreignKey: 'imagen_id',
            timestamps: false
        });
        Imagen.belongsToMany(models.Producto, {
            as: "productos",
            through: "productos_imagenes",
            foreignKey: 'imagen_id',
            otherKey: "producto_id",
            timestamps: false
        });
        Imagen.hasMany(models.Categoria, {
            as: 'categoria',
            foreignKey: 'imagen_id',
            timestamps: false
        });
    }

    return Imagen
};