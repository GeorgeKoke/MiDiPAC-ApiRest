import { Comuna } from "../models/Comuna";

export const createComuna = async(req,res)=>{
    const {nombreComuna} = req.body;

    try {
        const nuevaComuna = await Comuna.create({
            nombreComuna
        });
        res.json(nuevaComuna);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readComunas = async (req,res)=>{
    try {
        const comunas = await Comuna.findAll();
        res.json(comunas);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readComuna = async (req,res)=>{
    const {id} = req.params;
    try {
        const comuna = await Comuna.findByPk(id);

        if(!comuna){return res.status(404).json({message: 'Comuna no encontrada o no existe'})};
        res.json(comuna);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updateComuna = async (req,res)=>{
    const {id} =req.params;
    const{nombreComuna} = req.body;

    try {
        const comuna = await Comuna.findByPk(id);
        if(!comuna){
            return res.status(404).json({message: 'Comuna no encontrada o no existe, no se puede actualizar'});
        }else{
            comuna.nombreComuna = nombreComuna;
            await comuna.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteComuna = async(req,res)=>{
    try {
        const {id} = req.params;
        await Comuna.destroy({
            where:{ID_COMUNA: id},
        });
        return res.status(200).json({message:'Comuna Eliminada correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};