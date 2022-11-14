import { Router } from "express";
import { listaProductos, obtenerProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listaProductos);


router.route('/productos/:id').get(obtenerProductos);