
const config = require('../config/config');
const client = require("twilio")(config.ACCOUNT_SID, config.AUTH_TOKEN);

const sendSMS = (body, from, to) => {
  client.messages
    .create({
      body: `Te paso la lista de los productos que compraste ${carrito.productos}`,
      from: "whatsapp:+14155238886",
      to: `whatsapp:${config.NUMBERWSP}`,
    })
    .then((message) => console.log(message.sid))
    .catch(console.log);
};

module.exports = {
  sendSMS: sendSMS,
};
