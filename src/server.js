const express = require("express");
const app = express();
const dotenv = require("dotenv");
const config = require("./config/config.js");
const passport = require("passport");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

//RUN SERVE INITIALIZATION

require("./data/db");
require(`./passport/local-auth`);
//CABECERAS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

//MIDLEWARES

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan(`dev`));

app.use(
  require("express-session")({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

//ROUTERS
app.use("/api", require("./routes/productos.router"));
app.use("/api", require("./routes/carrito.router"));
app.use("/api", require("./routes/usuario.router"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//RUN LISTEN SERVER
app.listen(config.PORT, config.HOST, () => {
  console.log(`###################################`);
  console.log(`#########   PORT  ${config.PORT}  ###########`);
  console.log(`#########   API REST CODER! #######`);
  console.log(`#########     AMBIENTE  ###########`);
  console.log(`#########   ${config.NODE_ENV} ###########`);
  console.log(`###################################`);
  console.log(`Servidor express escuchando en http://localhost:${config.PORT}`)
});
