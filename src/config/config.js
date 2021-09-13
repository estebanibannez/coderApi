// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 8080,
  MONGO_URL_LOCAL: "mongodb://localhost:27017/ecommerce",
  MONGO_URL_ATLAS:
    process.env.MONGO_URL_ATLAS ||
    "mongodb+srv://admin:admin@cluster0.2dc9n.mongodb.net/ecommerce?retryWrites=true&w=majority",
  GMAIL_USER: process.env.GMAIL_USER || "e.ibannez.p@gmail.com",
  GMAIL_PASS: process.env.GMAIL_PASS || "",
  ACCOUNT_SID: process.env.ACCOUNT_SID || "AC88750c917a154293f1d60ac9abf26267",
  AUTH_TOKEN: process.env.AUTH_TOKEN || "d9f75b2c53a2ecaa1d3c8d3e661049c4",
  NUMBERWSP: "+56989342705",
};
