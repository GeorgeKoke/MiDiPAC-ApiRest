import { Fonasa } from "../models/Fonasa.js";

export const createLetra = async(req,res)=>{
    const {letraFonasa} = req.body;

    try {
        const nuevaLetra = await Fonasa.create({
            letraFonasa
        });
        res.json(nuevaLetra);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readLetras = async (req,res)=>{
    try {
        const letras = await Fonasa.findAll();
        res.json(letras);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readLetra = async (req,res)=>{
    const {id} = req.params;
    try {
        const letra = await Fonasa.findByPk(id);

        if(!letra){return res.status(404).json({message: 'Letra de Fonasa no encontrada o no existe'})};
        res.json(letra);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updateLetra = async (req,res)=>{
    const {id} =req.params;
    const{letraFonasa} = req.body;

    try {
        const letra = await Fonasa.findByPk(id);
        if(!letra){
            return res.status(404).json({message: 'Letra de Fonasa no encontrada o no existe, no se puede actualizar'});
        }else{
            letra.letraFonasa = letraFonasa;
            await letra.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteLetra = async(req,res)=>{
    try {
        const {id} = req.params;
        await Fonasa.destroy({
            where:{ID_FONASA: id},
        });
        return res.status(200).json({message:'Letra de Fonasa Eliminada correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};