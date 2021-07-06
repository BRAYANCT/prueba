const nodemailer = require("nodemailer"),
    express = require("express"),
    app = express();

app.post('/send-email', (req, res) => {

    var transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "brenden.quitzon@ethereal.email", // generated ethereal user
            pass: "7SYyufant8agjK3KCj", // generated ethereal password
        },
    });

    var mailOptions = {
        from: "Fred Foo 👻", // sender address
        to: "brayancapchataype@gmail.com", // list of receivers res 
        subject: "Hello ✔", // Subject line
        text: `Hola como estas <h1>Hello world?</h1><hr>
        <p>Cuerpo del mensaje</p>`, // plain text body
        /* html: `<h1>Hello world?</h1><hr>
        <p>Cuerpo del mensaje</p>`, */ // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            console.log("Email enviado.");
            res.status(200).jsonp(req.body);
        }
    })
})
let port = 3000;
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto', port);
});