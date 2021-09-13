const config = require("../config/config");
const client = require("twilio")(config.ACCOUNT_SID, config.AUTH_TOKEN);

const sendSMS = (body, from, to) => {
  client.messages
    .create({
      body: `${body}`,
      from: `${from}`,
      to: `${to}`,
    })
    .then((message) => console.log(message.sid))
    .catch(console.log);
};

module.exports = {
  sendSMS: sendSMS,
};
