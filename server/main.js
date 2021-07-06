/* express */
var exprees = require('express');
var app = exprees();
/* axios */
var axios = require('axios');

const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
});
server.listen(3000);

/* axios.get('https://bda7fa45a3dd.ngrok.io/').then(function(response) {

    let datos = response.data;
    // console.log(datos);
    for (let dato of datos) {
        var temperaturas = dato.temperat;

        if (temperaturas < 800) {
            console.log(temperaturas);

        } else {
            console.log("La temperaturas no se puede mostrar supera a los 800: " + temperaturas);

        }
    }


}).catch(function(error) {
    console.log(error);
}).then(function() {}) */