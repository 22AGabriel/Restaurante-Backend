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

export const borrarUsuario = async (req, res) =>{
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: 'El usuario fue eliminado con éxito'
    });
  } catch (error) {
    res.status(404).json({
      mensaje: 'Error al intentar borrar el Usuario'
    })
}
}
export const editarUsuarios = async(req,res)=>{
  try{
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje:'el usuario se edito correctamente'
    })
  }catch(error){
    console.log(error);
    res.status(400).json({
      mensaje:'error al intentar editar el usuario'
    })
  }
}