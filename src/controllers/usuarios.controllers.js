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


export const obtenerUsuarios = async(req,res)=>{
   try {
    const usuarioBuscado = await Usuario.findById(req.params.id)
    res.status(200).json(usuarioBuscado)
   } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje:"no se pudo obtener el usuario"
    })
   }

export const listarUsuarios = async(req,res)=>{
  try {
    const listaUsuarios = await Usuario.find()
   res.status(200).json(listaUsuarios)
    
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje:"error al obtener la lista de usuarios"
    })
  }


}