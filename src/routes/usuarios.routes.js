import { Router } from "express";
import { crearUsuario, listarUsuarios,obtenerUsuarios } from "../controllers/usuarios.controllers";
const router = Router();

router
  .route("/usuarios")
    .post(crearUsuario)
    .get(listarUsuarios)


router.route("/usuarios/:id").get(obtenerUsuarios)

export default router