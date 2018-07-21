const fs=require('fs');

let listadoPorHacer=[];

const guardarDB =()=>{
    let data= JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err)=>{
        if(err) throw new Error('no se puede registrar', err);
    });
}

const cargarDB=()=>{
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(error){
        listadoPorHacer=[];
    }
    
    // console.log(listadoPorHacer);
}
const getListado=()=>{
    cargarDB();
    return listadoPorHacer;
}

const crear=(descripcion)=>{
    cargarDB();
    let porHacer={
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true)=>{
    cargarDB();
    let index= listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar=(descripcion)=>{
    cargarDB();
    let nr=listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );
    
    if(listadoPorHacer.length === nr.length){
        return false;
    }else{
        listadoPorHacer = nr;
        guardarDB();
        return true;
    }
}

const getEstado=(completado = true)=>{
    cargarDB();
    let nr=listadoPorHacer.filter(tar=>tar.completado !== completado);
    if(listadoPorHacer.length === nr.length ){
        listadoPorHacer=nr;
    }
    return listadoPorHacer;
}
module.exports={
    crear,
    getListado,
    actualizar,
    borrar,
    getEstado
}