import { Router } from "express";
import { crearUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";

const router = Router();

router
  .route("/usuarios")
    .post(crearUsuario)


router.route("/usuarios/:id").get(obtenerUsuarios)

export default router