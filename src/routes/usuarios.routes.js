import { Router } from "express";
import { crearUsuario, editarUsuarios, listarUsuarios,obtenerUsuarios } from "../controllers/usuarios.controllers";
const router = Router();

router
  .route("/usuarios")
    .post(crearUsuario)
    .get(listarUsuarios)


router.route("/usuarios/:id").get(obtenerUsuarios).put(editarUsuarios)

export default router