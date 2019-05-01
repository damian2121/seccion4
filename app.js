const { crearArchivo } = require('./multiplicar/multiplicar');
let argv = process.argv;
let parametro = argv[2];

let base = parametro.split('=')[1];

let comando = argv._[0];
switch (comando) {
    case 'listar':

        break;
    case 'crear':
        crearArchivo(base)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no existe');
        break;
}