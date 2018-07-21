const descripcion={
    demand: true,
    alias:'d',
    desc: 'Descripción de la tarea por hacer'
};
const completado={
    default: true,
    alias:'c',
    desc: 'Marca como completado la tarea'
};

const argv=require('yargs')
    .command('crear','Crear un elemento por hacer',{descripcion})
    .command('actualizar','Actualiza el estado completado de una frase',{descripcion,completado})
    .command('borrar','ELimina un registro de la bd',{descripcion})
    .command('estado','Muestra por estado que se envia',{completado})
    .help()
    .argv;

module.exports={
    argv
}
