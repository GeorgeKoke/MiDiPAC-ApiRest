import { Programa } from "../models/Programa";

export const createPrograma = async(req,res)=>{
    const {nombrePrograma,ID_GRUPOETAREO} = req.body;

    try {
        const nuevoPrograma = await Programa.create({
            nombrePrograma,
            ID_GRUPOETAREO
        });
        res.json(nuevoPrograma);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readProgramas = async (req,res)=>{
    try {
        const programas = await Programa.findAll();
        res.json(programas);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readPrograma = async (req,res)=>{
    const {id} = req.params;
    try {
        const programa = await Programa.findByPk(id);

        if(!programa){return res.status(404).json({message: 'Programa no encontrado o no existe'})};
        res.json(programa);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updatePrograma = async (req,res)=>{
    const {id} =req.params;
    const{nombrePrograma, ID_GRUPOETAREO} = req.body;

    try {
        const programa = await Programa.findByPk(id);
        if(!programa){
            return res.status(404).json({message: 'Programa no encontrado o no existe, no se puede actualizar'});
        }else{
            programa.nombrePrograma = nombrePrograma;
            programa.ID_GRUPOETAREO = ID_GRUPOETAREO;
            await programa.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deletePrograma = async(req,res)=>{
    try {
        const {id} = req.params;
        await Programa.destroy({
            where:{ID_PROGRAMA: id},
        });
        return res.status(200).json({message:'Programa Eliminado correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};