import { Router } from "express";
import {
  crearUsuario,
  editarUsuarios,
  listarUsuarios,
  obtenerUsuarios,
  borrarUsuario,
  login,
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
        .isLength({min : 8})
        .withMessage("La contraseña debe tener un mínimo de 8 caracteres"),
    ],
    crearUsuario
  )
  .get(listarUsuarios);
router.route("/usuarios/login").post(
  [
    check("email")
      .notEmpty()
      .withMessage("El email es obligatorio")
      .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
      .withMessage("El email debe ser valido"),
    check("password")
      .notEmpty()
      .withMessage("La contraseña es obligatoria")
      .isLength({min : 8})
      .withMessage("La contraseña debe tener un mínimo de 8 caracteres"),
  ],
  login
);

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
        .isLength({min : 8})
        .withMessage("La contraseña debe tener un mínimo de 8 caracteres"),
    ],
    editarUsuarios
  )
  .delete(borrarUsuario);

export default router;
