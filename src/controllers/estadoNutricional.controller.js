import { EstadoNutricional } from "../models/EstadoNutricional";

export const createEstadoNutricional = async(req,res)=>{
    const {estado} = req.body;

    try {
        const nuevoEN = await EstadoNutricional.create({
            estado
        });
        res.json(nuevoEN);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readEstados = async (req,res)=>{
    try {
        const estados = await EstadoNutricional.findAll();
        res.json(estados);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readEstado = async (req,res)=>{
    const {id} = req.params;
    try {
        const estado = await EstadoNutricional.findByPk(id);

        if(!estado){return res.status(404).json({message: 'Estado Nutricional no encontrado o no existe'})};
        res.json(estado);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updateEstado = async (req,res)=>{
    const {id} =req.params;
    const{estado} = req.body;

    try {
        const estadoNu = await EstadoNutricional.findByPk(id);
        if(!estadoNu){
            return res.status(404).json({message: 'Estado Nutricional no encontrado o no existe, no se puede actualizar'});
        }else{
            estadoNu.estado = estado;
            await EstadoNutricional.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteEstado = async(req,res)=>{
    try {
        const {id} = req.params;
        await EstadoNutricional.destroy({
            where:{ID_ESTADONUTRICIONAL: id},
        });
        return res.status(200).json({message:'Estado Nutricional Eliminado correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};