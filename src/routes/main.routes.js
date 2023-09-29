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
import { createCS_Sector,readCS_Sector,findCS_SectoresByCS,findCS_SectoresBySector,readCS_Sectores,updateCS_Sector,deleteCS_Sector } from "../controllers/centroSalud_Sector.controller.js";
import { createP_A,readP_A,readP_Alimentos,findP_AByAlimento,findP_AByPrograma,updateP_A,deleteP_A } from "../controllers/programa_alimento.controller.js";

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
router.get('/find-persona/:rut', findPersona);
router.post('/post-persona',createPersona);
router.put('/put-persona/:id',updatePersona);
router.delete('/delete-persona/:id',deletePersona);

//HISTORIAL ENTREGA
router.get('/get-historiales', readHistoriales);
router.get('/get-historial/:id', readHistorial);
router.get('/find-historiales/:rut', findHistorialesByRut);
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

//CENTROSALUD X SECTOR
router.get('/get-centro_sectores', readCS_Sectores);
router.get('/get-centro_sector/:id', readCS_Sector);
router.get('/get-centro_sector/:centro', findCS_SectoresByCS);
router.get('/get-centro_sector/:sector', findCS_SectoresBySector);
router.post('/post-centro_sector',createCS_Sector);
router.put('/put-centro_sector/:id',updateCS_Sector);
router.delete('/delete-centro_sector/:id',deleteCS_Sector);

//PROGRAMA X ALIMENTO
router.get('/get-programa_alimentos', readP_Alimentos);
router.get('/get-programa_alimento/:id', readP_A);
router.get('/get-programa_alimento/:programa', findP_AByPrograma);
router.get('/get-programa_alimento/:alimento', findP_AByAlimento);
router.post('/post-programa_alimento',createP_A);
router.put('/put-programa_alimento/:id',updateP_A);
router.delete('/delete-programa_alimento/:id',deleteP_A);

export default router;