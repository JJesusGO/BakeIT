const db = require('../database/models');

const controlador = {

    getIndex: async (req, res) => {
        let premios = [null,null,null]
        const awards = await db.Award.findAll({
            include : [{association: "ratings", include: [{association: "producto", include:["imagenes"]}]}]
        }); 
        awards.forEach(award => {
            for(let i = 0; i < premios.length; i++){
                if(premios[i] == null){
                    premios[i] = award;
                    break
                }
                else{
                    if(premios[i].ratings.length < award.ratings.length){
                        premios.splice(i,0,award);
                        premios = [premios[0],premios[1],premios[2]];
                    }
                }
            }
        });
        premios.sort(function(a,b){ 
            if(a == null && b==null) return 0;
            if(a == null) return 1;
            if(b == null) return -1;
            return b.ratings.length - a.ratings.length;
        });
        premios.forEach(award => {
            if(award == null) return;
            if(award == null) return;
            award.ratings.sort(function(a,b){ 
                return b.rating - a.rating;
            });
        });

        res.render('index',{awards:premios});
    },
    getGaleria: async (req, res) => {

        const [productos, categorias] = await Promise.all([
            db.Producto.findAll({
                include: ["imagenes", "awards","categoria"]
            }),
            db.Categoria.findAll({
                include: ["imagen"]
            })
        ]);        
        res.render('galeria', { productos, categorias });
    },
    getHistory: (req, res) => {
        res.render('history');
    },
    getKnowUs: (req, res) => {
        res.render('knowUs');
    }
};

module.exports = controlador;