import { Router } from "express";
import { borrarUsuario, crearUsuario, listarUsuarios,obtenerUsuarios } from "../controllers/usuarios.controllers";
const router = Router();

router
  .route("/usuarios")
    .post(crearUsuario)
    .get(listarUsuarios)


router.route("/usuarios/:id").get(obtenerUsuarios).delete(borrarUsuario)

export default router