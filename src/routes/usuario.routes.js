import { Router } from "express";
import { readUsuarios, createUsuario, updateUsuario, deleteUsuario, readUsuario } from "../controllers/usuario.controller.js";

const router = Router();

router.get('/get-usuarios',readUsuarios);
router.get('/get-usuario/:id?/:rut?',readUsuario);
router.post('/post-usuario',createUsuario);
router.put('/put-usuario/:id',updateUsuario);
router.delete('/del-usuario/:id',deleteUsuario);

export default router;