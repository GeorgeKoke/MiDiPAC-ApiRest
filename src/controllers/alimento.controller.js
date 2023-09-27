import { Alimento } from "../models/Alimento.js";

export const createAlimento = async (req, res)=>{
    const {nombreAlimento, sigla} = req.body;

    try {
        const nuevoAlimento = await Alimento.create({
            nombreAlimento,
            sigla
        });
        res.json(nuevoAlimento);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readAlimentos = async (req,res) =>{
    try {
        const alimentos = await Alimento.findAll();
        res.json(alimentos);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readAlimento = async (req,res)=>{
    const {id} = req.params;
    try {
        const alimento = await Alimento.findByPk(id);

        if(!alimento){return res.status(404).json({message: 'Alimento no encontrado o no existe'})};
        res.json(alimento);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updateAlimento = async (req, res)=>{
    const {id} = req.params;
    const {nombreAlimento, sigla} = req.body;

    try {
        const alimento = await Alimento.findByPk(id);

        if(!alimento){
            return res.status(404).json({message: 'Alimento no encontrado o no existe'})
        }else{
            alimento.nombreAlimento = nombreAlimento;
            alimento.sigla = sigla;

            await alimento.save();
            res.sendStatus(204);
        };
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteAlimento = async (req,res) =>{
    try {
        const {id} = req.params;
        await Alimento.destroy({
            where:{ID_ALIMENTO: id},
        });
        return res.status(200).json({message:'Alimento Eliminado Correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}