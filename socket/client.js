var W3CWebSocket = require('websocket').w3cwebsocket,
    client = new W3CWebSocket('ws://127.0.0.1:8080/', 'echo-protocol'),
    axios = require('axios')

client.onerror = function() {
    console.log('Aun no Inicia el Servidor')
}


client.onopen = function() {
    console.log('Conexion Establecida')

    function senMessage() {
        axios.get('http://127.0.0.1:1234').then(function(response) {
            console.log(response.data)
            if (response.data[0].numero > 7) {
                client.send(JSON.stringify(response.data))
            }
            setTimeout(senMessage, 2 * 0.00000000000000025)
        }).catch(e => console.log("Conexion API Desconectada"))
    }
    senMessage()
}

client.onclose = function() {
    console.log('Servidor Apagado')
}

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        console.log("Enviando: " + e.data)
    }
}