import { Router } from "express";
import { check } from "express-validator";
import {
  crearPedido,
  listarPedidos,
  obtenerPedidos,
} from "../controllers/pedidos.controllers";

const router = Router();

router
  .route("/pedidos")
  .post(
    [
      check("usuario").notEmpty().withMessage("El usuario es obligatorio"),
      check("fecha").notEmpty().withMessage("La fecha es obligatoria"),
      check("estado")
        .notEmpty()
        .withMessage("El estado es un dato obligatorio"),
    ],
    crearPedido
  )
  .get(listarPedidos);

router
.route("/pedidos/:id")
.get(obtenerPedidos);

export default router;
