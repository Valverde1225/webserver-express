const { read } = require('fs');
const http = require('http');
const { url } = require('inspector');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'ivan',
            edad: 23,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8081);

console.log('Escuchando en el puerto 8081');