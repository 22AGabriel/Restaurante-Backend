import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, listarProductos, obtenerProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto)


router.route('/productos/:id').get(obtenerProductos).put(editarProducto).delete(borrarProducto)


export default router