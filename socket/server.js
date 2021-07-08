var WebSocketServer = require('websocket').server,
    http = require('http'),
    server = http.createServer(function(request, response) {
        console.log('Conexion Recibida')
        response.writeHead(404)
        response.end()
    }),
    express = require('express'),
    app = express(),
    nodemailer = require("nodemailer")

/* funcion de envio de correo */
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "ansel.rice@ethereal.email", // generated ethereal user
            pass: "dFJjTXCzD2ygGfrwAY", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "brayancapchataype@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
/* fin de envio de correo */
server.listen(8080, function() {
    console.log('Conexión Ejecutada en el Puerto', 8080)
})

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
})

function originIsAllowed() {
    return true
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
        request.reject()
        console.log('Conexion Rechazada')
        return
    }

    var connection = request.accept('echo-protocol', request.origin)
    console.log('Conexion Establecida')
    connection.on('message', function(message) {
        console.log(connection.remoteAddresses)
        if (message.type === 'utf8') {
            //COLOCAR AQUI ALERTA DE MENSAJES
            let alerta = JSON.parse(message.utf8Data);
            console.log('Alertaaaaaaaaaaaaaaaaaa')
                /* console.log(alerta[numero]) */
            main().catch(console.error);
        }
    })

    connection.on('close', function() {
        console.log('Conexion Terminada')
    })
})

app.get('/', (req, res) => {
    var numero = Math.floor(Math.random() * (10 - 2)) + 2
    var bit = Math.floor(Math.random() * (2 - 0)) + 0
    res.send([{ numero, bit }])
})

app.listen(1234, () => {
    console.log(`Example app listening at http://127.0.0.1:${1234}`)
})