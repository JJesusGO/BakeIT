import React from 'react'
import Tarjeta from '../basicos/Tarjeta'
import Spinner from '../basicos/Spinner'
import TituloSeccion from '../basicos/TituloSeccion'
import PanelBasico from '../basicos/PanelBasico'


function Categoria({
    categoria="CATEGORIA",
    cantidad="0",    
}) {
    return (
        <div className="col-xl-3 col-m-6 mb-4">
            <div className="panel-categoria h-100 py-2 mt-3 ">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold txt-azul-claro mb-1">
                                <p className="titulo-categoria">{categoria}</p>
                            </div>
                            <div className="h5 mb-0 font-weight-bold txt-azul-claro">
                                <p className="label-categoria">{cantidad} producto(s)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Producto({id,nombre,descripcion,img}){    
    const titulo = <h4 className="titulo-producto">{`(${id}) - ${nombre}`}</h4>
    const label = (
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <img className="my-3" src={img}/>
                        <p className="descripcion-producto mt-3">{descripcion}</p>
                    </div>                        
                );
    const clases = "panel-producto"; 
    return <PanelBasico titulo={titulo} label={label} config="col-sm-12 col-md-6 mb-4" className={clases}/>
}
function ProductoDetail({id,nombre,descripcion,precio,url,tipo,porciones}){
    const titulo = (<div className="d-flex justify-content-start align-items-center flex-column">
        <img src={url.Img1}/>
    </div>)
    const label = ( <div className="d-flex justify-content-center align-items-start flex-column">
                        <h4 className="titulo-producto mt-3">{`(${id}) - ${nombre}`}</h4>
                        <p className="descripcion-producto mt-3">{descripcion}</p>
                        <p className="label-producto mt-3 mb-1">Tipo      : {tipo.toUpperCase()}</p>
                        <p className="label-producto my-1">Precio    : $ {precio.toFixed(2)}</p>
                        <p className="label-producto my-1">Porciones : {porciones}</p>
                    </div>);
    const clases = "panel-producto"; 
    return <PanelBasico titulo={titulo} label={label} config="container-fluid" className={clases}/>
}

export default function PanelProductos({productos=[],latestProducto=null,categorias=[],cargando=true}) {        

    return (
        <>
            <TituloSeccion titulo="Productos"/>
            {
                cargando ?
                (<div className="d-flex align-items-center justify-content-center">                    
                    <Spinner color="-amarillo"/>
                </div>)
                :
                <div className="row">
                    <Tarjeta titulo="Lista de categorias" config="col-xl-8">
                        {
                            (categorias.length > 0)?
                                <div className="row">
                                    {
                                        categorias.map((categoria,index) => {
                                            return <Categoria key={"categoria"+index} categoria={categoria.label} cantidad={categoria.count}/>
                                        })
                                    }
                                </div>
                            : <Spinner color="-amarillo"/>
                        } 
                    </Tarjeta>
                    <Tarjeta titulo="Ultimo producto" config="col-xl-4">
                        {
                            (latestProducto)?
                                <ProductoDetail {...latestProducto}/>
                            : <Spinner color="-amarillo"/>
                        } 
                    </Tarjeta>
                    <Tarjeta titulo="Lista de productos" config="col-12">
                        {
                            (productos.length >0 )?
                                <div className="row">
                                    {
                                        productos.map(producto => {
                                            return <Producto key={"producto"+producto.id} {...producto}/>
                                        })
                                    }
                                </div>
                            : <Spinner color="-amarillo"/>
                        }                        
                    </Tarjeta>
                                        
                </div>
            }
            
        </>
    )
}
