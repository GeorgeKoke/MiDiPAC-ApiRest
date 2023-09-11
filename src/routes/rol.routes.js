import { Router } from "express";
import {createRol, readRoles, readRol, updateRol, deleteRol} from "../controllers/rol.controller.js";

const router = Router();

router.get('/roles', readRoles);
router.get('/rol/:id', readRol);
router.post('/rol',createRol);
router.put('/rol/:id',updateRol);
router.delete('/rol/:id',deleteRol);
export default router;