import { Router } from "express";
import { readUsuarios, createUsuario, updateUsuario, deleteUsuario, readUsuario } from "../controllers/usuario.controller.js";
import {createRol, readRoles, readRol, updateRol, deleteRol} from "../controllers/rol.controller.js";
import { createAlimento,readAlimentos,readAlimento,updateAlimento,deleteAlimento } from "../controllers/alimento.controller.js";
import { createCentroSalud,readCentroSalud, readCentrosSalud,updateCentroSalud,deleteCentroSalud } from "../controllers/centroSalud.controller.js";
import { createComuna,readComuna,readComunas,updateComuna,deleteComuna } from "../controllers/comuna.controller.js";
import { createEstado,readEstado,readEstados,updateEstado,deleteEstado } from "../controllers/estadoNutricional.controller.js";
import { createLetra,readLetras,readLetra,updateLetra,deleteLetra } from "../controllers/fonasa.controller.js";
import { createGrupo,readGrupo,readGrupos,updateGrupo,deleteGrupo } from "../controllers/grupoEtareo.controller.js";
import { createPrograma,readPrograma,readProgramas,updatePrograma,deletePrograma } from "../controllers/programa.controller.js";
import { createSector,readSector,readSectores,updateSector,deleteSector } from "../controllers/sector.controller.js";
import { createPersona,readPersona,readPersonas,findPersona,updatePersona,deletePersona } from "../controllers/persona.controller.js";
import { createHistorial,readHistorial,readHistoriales,findHistorialesByRut,updateHistorial,deleteHistorial } from "../controllers/historialEntrega.controller.js";


const router = Router();

//USUARIO
router.get('/get-usuarios',readUsuarios);
router.get('/get-usuario/:id?/:rut?',readUsuario);
router.post('/post-usuario',createUsuario);
router.put('/put-usuario/:id',updateUsuario);
router.delete('/del-usuario/:id',deleteUsuario);

//ROL
router.get('/get-roles', readRoles);
router.get('/get-rol/:id', readRol);
router.post('/post-rol',createRol);
router.put('/put-rol/:id',updateRol);
router.delete('/delete-rol/:id',deleteRol);

//PERSONA
router.get('/get-personas', readPersonas);
router.get('/get-persona/:id', readPersona);
router.get('/get-persona/:rut', findPersona);
router.post('/post-persona',createPersona);
router.put('/put-persona/:id',updatePersona);
router.delete('/delete-persona/:id',deletePersona);

//HISTORIAL ENTREGA
router.get('/get-historiales', readHistoriales);
router.get('/get-historial/:id', readHistorial);
router.get('/get-historiales/:rut', findHistorialesByRut);
router.post('/post-historial',createHistorial);
router.put('/put-historial/:id',updateHistorial);
router.delete('/delete-historial/:id',deleteHistorial);

//ALIMENTO
router.get('/get-alimentos', readAlimentos);
router.get('/get-alimento/:id', readAlimento);
router.post('/post-alimento',createAlimento);
router.put('/put-alimento/:id',updateAlimento);
router.delete('/delete-alimento/:id',deleteAlimento);

//CENTRO SALUD
router.get('/get-centros', readCentrosSalud);
router.get('/get-centro/:id', readCentroSalud);
router.post('/post-centro',createCentroSalud);
router.put('/put-centro/:id',updateCentroSalud);
router.delete('/delete-centro/:id',deleteCentroSalud);

//COMUNA
router.get('/get-comunas', readComunas);
router.get('/get-comuna/:id', readComuna);
router.post('/post-comuna',createComuna);
router.put('/put-comuna/:id',updateComuna);
router.delete('/delete-comuna/:id',deleteComuna);

//ESTADO NUTRICIONAL
router.get('/get-estados', readEstados);
router.get('/get-estado/:id', readEstado);
router.post('/post-estado',createEstado);
router.put('/put-estado/:id',updateEstado);
router.delete('/delete-estado/:id',deleteEstado);

//FONASA
router.get('/get-letras', readLetras);
router.get('/get-letra/:id', readLetra);
router.post('/post-letra',createLetra);
router.put('/put-letra/:id',updateLetra);
router.delete('/delete-letra/:id',deleteLetra);

//GRUPO ETAREO
router.get('/get-grupos', readGrupos);
router.get('/get-grupo/:id', readGrupo);
router.post('/post-grupo',createGrupo);
router.put('/put-grupo/:id',updateGrupo);
router.delete('/delete-grupo/:id',deleteGrupo);

//PROGRAMA
router.get('/get-programas', readProgramas);
router.get('/get-programa/:id', readPrograma);
router.post('/post-programa',createPrograma);
router.put('/put-programa/:id',updatePrograma);
router.delete('/delete-programa/:id',deletePrograma);

//SECTOR
router.get('/get-sectores', readSectores);
router.get('/get-sector/:id', readSector);
router.post('/post-sector',createSector);
router.put('/put-sector/:id',updateSector);
router.delete('/delete-sector/:id',deleteSector);



export default router;