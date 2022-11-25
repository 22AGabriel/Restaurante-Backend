import { validationResult } from "express-validator";
import Usuario from "../models/usuario";
import bcrypt from 'bcryptjs';
import generarJWT from "../helpers/jwt";

export const crearUsuario = async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errores: errors.array()
      })
    }
    const {email, password} = req.body;
    let usuario  = await Usuario.findOne({email});
    if(usuario){
      return res.status(400).json({
        mensaje: 'Ya existe un usuario con el correo ingresado',
      });
    }
    
    usuario = new Usuario(req.body);
    
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({
      mensaje: "Se agregó un nuevo usuario",
      usuario: usuario.nombreUsuario,
      uid: usuario._id,
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
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errores: errors.array()
      })
    }
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


export const login = async(req,res)=>{
  try {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
   return res.status(400).json({
       errors:  errors.array(),
   });}

   const  {email , password}  = req.body;

   let usuario = await Usuario.findOne({email});
   if(!usuario){
       return res.status(400).json({
           mensaje: "Correo o contraseña invalido",
       });
   }
   const passwordValido = bcrypt.compareSync(password, usuario.password);

   if(!passwordValido){
       return res.status(400).json({
           mensaje: "Correo o contraseña invalido",
       })
   }

   const token = await generarJWT(usuario._id, usuario.nombreUsuario)

   res.status(200).json({
       mensaje: "El usuario existe",
       uid:  usuario._id,
       nombre: usuario.nombreUsuario,
       token
   });
  } catch (error) {
   res.status(400).json({
       mensaje: "Usuario o contraseña invalido"
   });
  }
};