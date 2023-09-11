import { Rol } from "../models/Rol.js";

export const createRol = async (req,res) => {
    const {nombreRol, descripcionRol} = req.body;

    try {
        const nuevoRol = await Rol.create({
            nombreRol,
            descripcionRol
        });
        res.json(nuevoRol);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};
export const readRoles = async (req,res) => {
    try {
        const roles = await Rol.findAll();
        res.json(roles);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readRol = async (req,res) => {
    const {id} = req.params;
    try {
        const rol = await Rol.findByPk(id);

        if(!rol){return res.status(404).json({message: 'Rol no encontrado o no existe'})};
        res.json(rol);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};
export const updateRol = async (req,res) => {
    const {id} = req.params;
    const {nombreRol, descripcionRol} = req.body;

    try {
        const rol = await Rol.findByPk(id);
        if(!rol){
            return res.status(404).json({message: 'No se pudo actualizar, Rol no encontrado o no existe'});
        }else{
            rol.nombreRol = nombreRol;
            rol.descripcionRol = descripcionRol;

            await rol.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteRol = async (req,res) => {

};