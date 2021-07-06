/* express */
var exprees = require('express');
var app = exprees();
/* axios */
var axios = require('axios');


axios.post('https://bda7fa45a3dd.ngrok.io/').then(function(response) {

    let datos = response.data;
    console.log(datos);
    for (let i = 0; i < datos.length; i++) {
        // console.log('temperat:',datos[i].temperat);
        let temperatura = datos[i].temperat;
        if (temperatura > 800) {
            console.log("La temperatura no se puede mostrar supera a los 800: " + temperatura);
        }
    }

}).catch(function(error) {
    console.log(error);
}).then(function() {})


app.listen(3000, () => console.log("sercidor en puerto 3000"))