import Usuario from "../models/usuario";

export const crearUsuario = async (req, res) => {
  try {
    const usuarioNuevo = new Usuario(req.body);
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "Se agregó un nuevo usuario",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Ocurrió un error al intentar agregar el nuevo usuario",
    });
  }
};