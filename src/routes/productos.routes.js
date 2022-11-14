import { Router } from "express";
import { crearProducto, listaProductos, obtenerProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listaProductos).post(crearProducto)


router.route('/productos/:id').get(obtenerProductos);


export default router