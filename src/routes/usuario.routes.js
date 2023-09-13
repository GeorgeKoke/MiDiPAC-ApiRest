import { Router } from "express";
import { readUsuarios, createUsuario, updateUsuario, deleteUsuario, readUsuario } from "../controllers/usuario.controller.js";

const router = Router();

router.get('GET/usuarios',readUsuarios);
router.get('GET/usuario/:id?/:rut?',readUsuario);
router.post('POST/usuario',createUsuario);
router.put('UPDATE/usuario/:id',updateUsuario);
router.delete('DELETE/usuario/:id',deleteUsuario);

export default router;