const LocalStrategy = require("passport-local").Strategy;
const controller = require("../api/usuario.controller");
const passport = require("passport");
const bCrypt = require("bcrypt");

passport.use(
  "login",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async function (req, username, password, done) {
      const usuario = await controller.buscar(username);
      console.log(JSON.stringify(usuario));
      if (!usuario) {
        console.log("usuario no encontrado con el nombre:", username);
        return done(
          null,
          false,
          console.log("mensaje", "usuario no encontrado"),
        );
      } else {
        if (!isValidPassword(usuario, password)) {
          console.log("contraseña invalida");
          return done(
            null,
            false,
            console.log("mensaje", "contraseña invalida"),
          );
        } else {
          return done(null, usuario);
        }
      }
    },
  ),
);
passport.use(
  "signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async function (req, username, password, done) {
      const usuario = await controller.buscar(username);
      if (usuario) {
        return done(null, false, console.log("mensaje", "usuario ya existe"));
      } else {
        const newUser = await controller.signup(req.body);
        return done(
          null,
          newUser,
          console.log("Usuario registrado éxitosamente."),
        );
      }
    },
  ),
);

//------- valida la password
function isValidPassword(user, password) {
  return bCrypt.compareSync(password, user.password);
}
//almaceno el id de usuario en session
passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  let user = controller.buscarPorId(id);
  return done(null, user);
});
