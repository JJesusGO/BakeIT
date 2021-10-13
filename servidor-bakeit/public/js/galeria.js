window.addEventListener('DOMContentLoaded', function(){
    
    const todos = "todos"

    const productos     = document.querySelectorAll('.producto');
    const filtro_postre = document.querySelectorAll(".categoria-postre");
    const filtro_kit    = document.querySelectorAll(".categoria-kit");
    
    const postreArray = Array.from(filtro_postre);
    const kitArray    = Array.from(filtro_kit);

    const estado = {
        postre: postreArray.map((postre,index) => {return {activo: postre.dataset.categoria=="todos", categoria: postre.dataset.categoria, index}}),
        kit: kitArray.map((kit,index) => {return {activo: kit.dataset.categoria=="todos", categoria: kit.dataset.categoria, index}}),
    }
    const categoria = {
        postre:  estado.postre.map(postre => postre.categoria),
        kit:  estado.kit.map(kit => kit.categoria),
    }
    RenderEstado();

    filtro_postre.forEach((bf)=>{
        bf.addEventListener('click', function(){
            ToggleFiltroPostre(bf);
        });
    });   
    filtro_kit.forEach((bf)=>{
        bf.addEventListener('click', function(){
            ToggleFiltroKit(bf);
        });
    });

    function ToggleFiltroKit(boton){
        ToggleFiltro(boton, estado.kit);
    }
    function ToggleFiltroPostre(boton){
        ToggleFiltro(boton, estado.postre);
    }
    function ToggleFiltro(boton,tipo){

        const categoria = boton.dataset.categoria;
        const filtros   = tipo;
        filtros.forEach((f)=>{
            if(f.categoria == categoria)
                f.activo = !f.activo;
        });

        if(categoria==todos){
            if(todos.activo)
                filtros.forEach((f)=>{
                    f.activo = categoria==todos;
                });    
        }
        else{
            let activos = 0;
            filtros.forEach((f)=>{
                if(f.activo && f.categoria!=todos)
                    activos++;
            });
            filtros.forEach((f)=>{
                if(activos == filtros.length-1)
                    f.activo = f.categoria == todos;
                else
                    f.activo = f.activo && f.categoria != todos;
            });

        }
    
        RenderEstado();
    }

    function RenderEstado(){        
        const activas = [];
        estado.postre.forEach((f)=>{
            if(f.activo){
                filtro_postre[f.index].classList.add("activo");
                if(f.categoria!=todos)
                    activas.push(f.categoria);
                else
                    categoria.postre.forEach(categoria => {if(categoria!=todos) activas.push(categoria)});
            }
            else
                filtro_postre[f.index].classList.remove("activo");
        });
        estado.kit.forEach((f)=>{
            if(f.activo){
                filtro_kit[f.index].classList.add("activo");
                if(f.categoria!=todos)
                    activas.push(f.categoria);
                else
                    categoria.kit.forEach(categoria => {if(categoria!=todos) activas.push(categoria)});                    
            }
            else
                filtro_kit[f.index].classList.remove("activo");
        });
        
        productos.forEach((producto)=>{
            if(activas.includes(producto.dataset.categoria))
                producto.classList.remove("oculto");
            else
                producto.classList.add("oculto");
        });
        
    }
});