import { Router } from "express";
import {createRol, readRoles, readRol, updateRol, deleteRol} from "../controllers/rol.controller.js";

const router = Router();

router.get('/get-roles', readRoles);
router.get('/get-rol/:id', readRol);
router.post('/post-rol',createRol);
router.put('/put-rol/:id',updateRol);
router.delete('/delete-rol/:id',deleteRol);
export default router;