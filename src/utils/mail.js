const nodemailer = require("nodemailer");
const log4js = require("log4js");
const logger = log4js.getLogger("consola");
const config = require("../config/config");
// ------------------------------ config ETHEREAL
const transporterEthereal = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "janiya.strosin18@ethereal.email",
    pass: "fvNGaTwbUvP1XA2nkC",
  },
});

// ------------------------------ config GMAIL
const transporterGmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.GMAIL_USER || process.env.GMAIL_USER,
    pass: config.GMAIL_PASS || process.env.GMAIL_PASS,
  },
});

const sendMail = (from, to, subject, text, html) => {
  const mailOptionsGmail = {
    from: from || "Servidor Node.js",
    to: to || "e.ibannez.p@gmail.com",
    subject: subject || "TEST",
    text: text || "TEST",
    html: "<h1 style='color: blue;'>Contenido de prueba desde <span style='color: green;'>Node.js con Nodemailer</span></h1>",
  };

  transporterEthereal.sendMail(mailOptionsGmail, (err, info) => {
    if (err) {
      console.log(err);
      return err;
    }
    logger.trace("Correo enviado", info);
  });
};

module.exports = {
  sendMail,
};
