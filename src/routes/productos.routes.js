import { Router } from "express";
import { crearProducto, editarProducto, listaProductos, obtenerProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listaProductos).post(crearProducto)


router.route('/productos/:id').get(obtenerProductos).put(editarProducto);


export default router