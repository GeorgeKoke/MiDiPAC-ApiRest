import { Programa_Alimento } from "../models/Programa_Alimento.js";

export const createP_A = async(req,res)=>{
    const {ID_PROGRAMA, ID_ALIMENTO} = req.body;

    try {
        const nuevoP_A = await Programa_Alimento.create({
            ID_PROGRAMA, 
            ID_ALIMENTO
        });
        res.json(nuevoP_A);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readP_Alimentos = async (req,res)=>{
    try {
        const p_alimentos = await Programa_Alimento.findAll();
        res.json(p_alimentos);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const findP_AByPrograma = async (req,res)=>{
    const {programa} = req.params;
    try {
        const p_alimentos = await Programa_Alimento.findAll({
            where:[{
                ID_PROGRAMA: programa,
            }]
        });
        res.json(p_alimentos);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const findP_AByAlimento = async (req,res)=>{
    const {alimento} = req.params;
    try {
        const p_alimentos = await Programa_Alimento.findAll({
            where:[{
                ID_ALIMENTO: alimento,
            }]
        });
        res.json(p_alimentos);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readP_A = async (req,res)=>{
    const {id} = req.params;
    try {
        const p_alimento = await Programa_Alimento.findByPk(id);

        if(!p_alimento){return res.status(404).json({message: 'Elemento no encontrado o no existe'})};
        res.json(p_alimento);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updateP_A = async (req,res)=>{
    const {id} =req.params;
    const{ID_PROGRAMA, ID_ALIMENTO} = req.body;

    try {
        const p_alimento = await Programa_Alimento.findByPk(id);
        if(!p_alimento){
            return res.status(404).json({message: 'Elemento no encontrado o no existe, no se puede actualizar'});
        }else{
            p_alimento.ID_PROGRAMA = ID_PROGRAMA; 
            p_alimento.ID_ALIMENTO = ID_ALIMENTO;
            await p_alimento.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteP_A = async(req,res)=>{
    try {
        const {id} = req.params;
        await Programa_Alimento.destroy({
            where:{ID_PROGRAMA_ALIMENTO: id},
        });
        return res.status(200).json({message:'Elemento Eliminado correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};