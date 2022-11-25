import { Router } from "express";
import { login } from "../controllers/login.controllers";
import { check } from "express-validator";

const router = Router();
router.route('/login').post(
    [
    check('email', 'El email es obligatorio').isEmail(),
    check('password','El password debe contener 8 caracteres como minimo').isLength({min: 8}),
    ],login);

export default router;