const express = require("express");
const router = express.Router();
const passport = require("passport");
const utils = require("../utils/mail");

router.post(
  "/usuario/login",
  passport.authenticate("login", { failureRedirect: "/faillogin" }),
  async (req, res) => {
    try {
      return res.json({
        status: 200,
        message: "OK - Usuario logeado",
        // data: req.body,
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
);

router.post(
  "/usuario/signup",
  passport.authenticate("signup", { failureRedirect: "/failsignup" }),
  (req, res) => {
    utils.sendMail(
      "Server",
      "e.ibannez.p@gmail.com",
      "Nuevo usuario",
      JSON.stringify(req.body),
    );

    try {
      return res.json({
        status: 200,
        message: "OK",
        data: req.body,
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
);

router.get("/faillogin", (req, res) => {
  res.status(400).send({ error: "usuario o contraseña invalida" });
});

router.get("/failsignup", (req, res) => {
  res.status(400).send({ error: "fallo el signup" });
});

router.delete("/logout", (req, res) => {
  try {
    req.logout();
    return res.json({
      status: 200,
      message: "Session Cerrada éxitosamente.",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
