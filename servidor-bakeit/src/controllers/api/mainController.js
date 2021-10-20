const db = require('../../database/models');

const mainController = {
   generales: async (req,res)=>{
        const [usuarios,productos, categorias, recomendaciones, awards, ofertas] = await Promise.all([
            db.Usuario.count({}),
            db.Producto.count({}),
            db.Categoria.count({}),
            db.Recomendacion.count({}),
            db.Award.count({}),
            db.Oferta.count({})            
        ])
        res.json({
            usuarios,productos, categorias, recomendaciones, awards, ofertas
        })
   }
}

module.exports = mainController;