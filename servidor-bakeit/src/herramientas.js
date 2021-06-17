
const log = (...args)=>{
    const date = new Date();
    let hora   = date.getHours(),
        minutos = date.getMinutes(),
        segundos = date.getSeconds(),
        dia = date.getDate(),
        mes = (date.getMonth()+1);

    hora = (hora<10)?"0"+hora:hora;
    minutos = (minutos<10)?"0"+minutos:minutos;
    segundos = (segundos<10)?"0"+segundos:segundos;
    dia = (dia<10)?"0"+dia:dia;
    mes = (mes<10)?"0"+mes:mes;

    const fecha = hora+":"+minutos+":"+segundos+" "+dia+"/"+mes+"/"+date.getFullYear();
    
    console.log("Servidor BakeIt ("+fecha+") : ",args);
}

module.exports = {log};