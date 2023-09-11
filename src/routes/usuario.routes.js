import { Router } from "express";
import { readUsuarios, createUsuario, updateUsuario, deleteUsuario, readUsuario } from "../controllers/usuario.controller.js";

const router = Router();

router.get('/usuarios',readUsuarios);
router.get('/usuario/:id?/:rut?',readUsuario);
router.post('/usuario',createUsuario);
router.put('/usuario/:id',updateUsuario);
router.delete('/usuario/:id',deleteUsuario);

export default router;