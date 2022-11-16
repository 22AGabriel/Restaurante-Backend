import { Router } from "express";
import {
  crearUsuario,
  editarUsuarios,
  listarUsuarios,
  obtenerUsuarios,
  borrarUsuario,
} from "../controllers/usuarios.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/usuarios")
  .post(
    [
      check("nombreUsuario")
        .notEmpty()
        .withMessage("El nombre del usuario es obligatorio")
        .isLength({ min: 3, max: 30 })
        .withMessage(
          "El nombre debe tener un mínimo de 3 y un máximo de 15 caracteres"
        ),
      check("apellidoUsuario")
        .notEmpty()
        .withMessage("El apellido del usuario es obligatorio")
        .isLength({ min: 3, max: 30 })
        .withMessage(
          "El apellido debe tener un mínimo de 3 y un máximo de 15 caracteres"
        ),
      check("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
        .withMessage("El email debe ser valido"),
      check("password")
        .notEmpty()
        .withMessage("La contraseña es obligatoria")
        .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
        .withMessage(
          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula, al menos una minúscula y NO contener un caracter especial"
        ),
      check("perfil").notEmpty().withMessage("Debe seleccionar un perfil"),
    ],
    crearUsuario
  )
  .get(listarUsuarios);

router
  .route("/usuarios/:id")
  .get(obtenerUsuarios)
  .put(
    [
      check("nombreUsuario")
        .notEmpty()
        .withMessage("El nombre del usuario es obligatorio")
        .isLength({ min: 3, max: 30 })
        .withMessage(
          "El nombre debe tener un mínimo de 3 y un máximo de 15 caracteres"
        ),
      check("apellidoUsuario")
        .notEmpty()
        .withMessage("El apellido del usuario es obligatorio")
        .isLength({ min: 3, max: 30 })
        .withMessage(
          "El apellido debe tener un mínimo de 3 y un máximo de 15 caracteres"
        ),
      check("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
        .withMessage("El email debe ser valido"),
      check("password")
        .notEmpty()
        .withMessage("La contraseña es obligatoria")
        .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
        .withMessage(
          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula, al menos una minúscula y NO contener un caracter especial"
        ),
      check("perfil").notEmpty().withMessage("Debe seleccionar un perfil"),
    ],
    editarUsuarios
  )
  .delete(borrarUsuario);

export default router;
