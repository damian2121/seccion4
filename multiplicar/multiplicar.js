const fs = require('fs');



crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} =${base* i}\n`;

        }

        fs.writeFile('tablas/pepe.txt', data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla -${ base }.txt`)

            console.log("archivo creado");
        })
    })
}

module.exports = {
    crearArchivo
}