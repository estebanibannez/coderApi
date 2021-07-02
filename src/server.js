const express = require("express");
const app = express();

const config = require("./config/config.js");

const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const CarritoRoute = require("./routes/carrito.router");
const ProductosRoute = require("./routes/productos.router");

//RUN SERVE INITIALIZATION

// require("./database");


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

//ROUTERS
app.use("/api/productos", ProductosRoute);
app.use("/api/carrito", CarritoRoute);

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
});
