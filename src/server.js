const express = require("express");
const app = express();

//RUN SERVE INITIALIZATION
const app = express();
require("./database");

//SETTINGS
app.set("port", process.env.PORT || 3000);

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
app.use(cors());
app.use(bodyParser.json());
app.use(morgan(`dev`));

app.use(express.json());

//RUN LISTEN SERVER
app.listen(app.get("port"), () => {
  console.log(`###################################`);
  console.log(`#########   PORT  ${app.get("port")}  ###########`);
  console.log(`#########   API REST CODER !    ###########`);
  console.log(`#########   AMBIENTE    ###########`);
  console.log(`#########   ${process.env.NODE_ENV} ###########`);
  console.log(`###################################`);
});
