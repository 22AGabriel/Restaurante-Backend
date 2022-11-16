import { Router } from "express";
import { check } from "express-validator";
import { borrarProducto, crearProducto, editarProducto, listarProductos, obtenerProductos } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listarProductos).post(
    [
        check('nombreProducto')
        .notEmpty()
        .withMessage('El nombre del producto es obligatorio')
        .isLength({min:5, max: 50})
        .withMessage('El nombre del producto debe tener entre 5 y 50 caracteres'),
        check('precio')
        .notEmpty()
        .withMessage('El precio es un dato obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser un numero')
        .custom((value)=>{
            if(value >= 100 && value <=10000){
                return true
            }else{
                throw new Error('El precio debe estar entre $100 y $10000')
            }
        }),
        check('detalle')
        .notEmpty()
        .withMessage('El detalle del producto es obligatorio')
        .isLength({min: 25, max:300})
        .withMessage('El detalle debe contener entre 25 y 300 caracteres'),
        check('imagen')
        .notEmpty()
        .withMessage('La URL de la imagen es obligatoria')
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage('Debe ingresar una URL válida'),
        check('categoria')
        .notEmpty()
        .withMessage('La categoria es un dato obligatorio')
        .isIn([
            'Sandwich',
            'Plato',
            'Pures',
            'Agregados',
            'Bebida sin alcohol',
            'Bebida con alcohol'
        ])
        .withMessage('Debe ingresar una categoria válida')
    ],crearProducto)


router.route('/productos/:id').get(obtenerProductos).put(editarProducto).delete(borrarProducto)


export default router
// "categoria": "Sandwich",
// "cantidad": 1

