import { Router } from "express";
import { crearUsuario, editarUsuarios, listarUsuarios,obtenerUsuarios, borrarUsuario } from "../controllers/usuarios.controllers";

const router = Router();

router
  .route("/usuarios")
    .post(crearUsuario)
    .get(listarUsuarios)


router.route("/usuarios/:id").get(obtenerUsuarios).put(editarUsuarios).delete(borrarUsuario)

export default router