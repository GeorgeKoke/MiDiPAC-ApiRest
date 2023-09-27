import { GrupoEtareo } from "../models/GrupoEtareo";

export const createGrupo = async(req,res)=>{
    const {rango} = req.body;

    try {
        const nuevoGrupo = await GrupoEtareo.create({
            rango
        });
        res.json(nuevoGrupo);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readGrupos = async (req,res)=>{
    try {
        const grupos = await GrupoEtareo.findAll();
        res.json(grupos);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readGrupo = async (req,res)=>{
    const {id} = req.params;
    try {
        const grupo = await GrupoEtareo.findByPk(id);

        if(!grupo){return res.status(404).json({message: 'Grupo Etareo no encontrado o no existe'})};
        res.json(grupo);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updateGrupo = async (req,res)=>{
    const {id} =req.params;
    const{rango} = req.body;

    try {
        const grupo = await GrupoEtareo.findByPk(id);
        if(!grupo){
            return res.status(404).json({message: 'Grupo Etareo no encontrado o no existe, no se puede actualizar'});
        }else{
            grupo.rango = rango;
            await grupo.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteGrupo = async(req,res)=>{
    try {
        const {id} = req.params;
        await GrupoEtareo.destroy({
            where:{ID_GRUPOETAREO: id},
        });
        return res.status(200).json({message:'Grupo Etareo Eliminado correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};