const ModelUsuario = require("../model/usuario.model");
const bCrypt = require("bcrypt");

class UsuarioController {
  constructor() {}

  async signup(usuario) {
    const newUser = new ModelUsuario();
    // set the user's local credentials
    newUser.username = usuario.username;
    newUser.password = createHash(usuario.password);
    newUser.email = usuario.email;
    newUser.firstName = usuario.firstName;
    newUser.lastName = usuario.lastName;

    try {
      return await ModelUsuario.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  async buscar(username) {
    try {
      return await ModelUsuario.findOne({ username: username }).exec();
    } catch (error) {
      throw error;
    }
  }

  async buscarPorId(id) {
    try {
        return await ModelUsuario.findById(id);
    } catch (error) {
        throw error;
    }
}
}

//-------  genera un hash usando bCrypt
function createHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

module.exports = new UsuarioController();
