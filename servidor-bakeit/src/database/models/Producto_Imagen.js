const { eliminar } = require("../../herramientas/herramientas");
const path = require("path");

module.exports = (sequelize,DataTypes) => {
    const alias = 'Producto_Imagen';
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
        imagen_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    };
    const config = {
        timestamps: false,
        tableName: 'productos_imagenes'
    };

    const Producto_Imagen = sequelize.define(alias, cols, config);
    Producto_Imagen.associate = function(models) {
        
        const Imagen = models.Imagen;
        Producto_Imagen.eliminar = async function(producto_id){

            const [placeholder,producto_imagenes] = await Promise.all([
                Imagen.findOne({where: {url: process.env.PLACEHOLDER_IMG}}),
                Producto_Imagen.findAll({where: { producto_id }})
            ]);
            producto_imagenes.forEach(async (imagen) => {
                if(imagen.url != process.env.PLACEHOLDER_IMG)
                    eliminar(path.join(__dirname,"../../../public/data/products/"+imagen.url));
            });
            const eliminar_imagenes = producto_imagenes.map(imagen => imagen.imagen_id);
           
            await Producto_Imagen.destroy({
                where: { producto_id }
            });  
    
            await Promise.all([
                ...eliminar_imagenes.map(imagenid => {
                    if(imagenid != placeholder.id)                
                        return Imagen.destroy({
                            where: { id: imagenid}
                        });
                    return null;
                })
            ]);
    
        }

    }


    return Producto_Imagen;
};