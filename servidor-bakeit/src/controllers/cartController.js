const db = require('../database/models');

const Carrito = db.Carrito;
const Carrito_Producto = db.Carrito_Producto;

const getCarts = async (usuarioId)=>{
    let carts = await Carrito.findAll({
        where : { usuario_id: usuarioId },
        include : ['usuario',{association : 'pedidos', include : [{association : "producto", include : ["imagenes","ofertas"]}] }]
    });
    if(carts.length <= 0){
        await Carrito.create({ usuario_id  : usuarioId, status : "pendiente activo"})
        carts = await Carrito.findAll({
            where : { usuario_id: usuarioId },
            include : ['usuario',{association : 'pedidos', include : [{association : "producto", include : ["imagenes","ofertas"]}] }]
        });
    }
    return Promise.resolve(carts);
}
const getCartActivo = async (usuarioId)=>{
    return  new Promise(async (callback)=>{
        let cartActivo = null
        while(!cartActivo){        
            const carts = await getCarts(usuarioId);
            cartActivo = carts.find(cart => cart.status.includes("activo"));
            if(!cartActivo){
                const pedido = await Carrito.findOne({where: {status : "pendiente"}});
                if(pedido)
                    await Carrito.update({status : "pendiente activo"},{where: {id : pedido.id}});
                else
                    await Carrito.create({ usuario_id  : usuarioId, status : "pendiente activo"})        
            }
            if(cartActivo)
                callback(cartActivo.id);
        } 
    });       
} 
const resolveCart = (cart)=>{
    let total = 0;    
    cart.pedidos.forEach(pedido => {
        if(pedido.producto.ofertas)
            total += pedido.cantidad*pedido.producto.precio*(1 -pedido.producto.ofertas.descuento/100);
        else
            total += pedido.cantidad * pedido.producto.precio;
    });
    return {  
                id: cart.id,
                pedidos: cart.pedidos,
                status:  {
                    tipo : cart.status.split(" ")[0].toUpperCase(),
                    activo : cart.status.includes("activo"),
                },
                total
            };
}
const getPedido  = async (productoId,carritoId)=>{
    return await Carrito_Producto.findOne({
        where : { carrito_id: carritoId, producto_id: productoId }
    });
}

const controlador = {

    getCart: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/"); 
        const id = await getCartActivo(req.session.usuarioLoggeado.id)
        const carts = await getCarts(req.session.usuarioLoggeado.id);
        const activo = carts.find(cart => cart.id == id);;     
        const cart = resolveCart(activo);        
        return res.render('product/cart',{carts,cart});        
    },
    postCart: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/"); 
        await Carrito.update({ status : "pendiente"},{ where : { status: "pendiente activo" }});
        await Carrito.create({ usuario_id  : req.session.usuarioLoggeado.id, status : "pendiente activo"})
        return res.redirect("/cart");        
    },    
    getCartID: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");
        const id = req.params.id;
        const carts = await getCarts(req.session.usuarioLoggeado.id);
        const activo = carts.find(cart => cart.id==id);     
        const cart = resolveCart(activo);     
        console.log(cart.status);
        return res.render('product/cart',{carts,cart});        
    },
    postActivarID: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");
        const id = req.params.id;
        await Carrito.update({ status : "pendiente"},{ where : { status: "pendiente activo" }});
        await Carrito.update({ status : "pendiente activo"},{ where : { id }});
        return res.redirect('/cart');;        
    },
    postComprarID: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");
        const id = req.params.id;
        await Carrito.update({ status : "adquirido"},{ where : { id }});
        return res.redirect('/cart/'+id);;        
    },
    deleteCartID: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");
        const id = req.params.id;        
        await Carrito.eliminar(id);
        return res.redirect('/cart');;        
    },
    postPedido: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");
        
        const carrito_id = await getCartActivo(req.session.usuarioLoggeado.id);        
        const {producto_id} = req.body;         
        const pedido = await getPedido(producto_id,carrito_id);        

        if(pedido)
            await Carrito_Producto.update({cantidad:pedido.cantidad+1},{where: {id:pedido.id}});
        else
            await Carrito_Producto.create({carrito_id,producto_id,cantidad:1});

        return res.redirect("/cart");
    },
    putPedidoID: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");
                
        const {cantidad} = req.body;
        await Carrito_Producto.update({cantidad},{where: {id:req.params.id}});        

        return res.redirect("/cart");
    },
    deletePedidoID: async (req, res) => {
        if (!req.session.usuarioLoggeado)
            return res.redirect("/");
        await Carrito_Producto.destroy({where: {id:req.params.id}});
        return res.redirect("/cart");
    }
  
};

module.exports = controlador;