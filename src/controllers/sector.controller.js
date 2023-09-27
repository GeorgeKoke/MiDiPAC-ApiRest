import { Sector } from "../models/Sector.js";

export const createSector = async(req,res)=>{
    const {nombreSector} = req.body;

    try {
        const nuevoSector = await Sector.create({
            nombreSector,
            ID_CENTROSALUD
        });
        res.json(nuevoSector);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readSectores = async (req,res)=>{
    try {
        const sectores = await Sector.findAll();
        res.json(sectores);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readSector = async (req,res)=>{
    const {id} = req.params;
    try {
        const sector = await Sector.findByPk(id);

        if(!sector){return res.status(404).json({message: 'Sector no encontrado o no existe'})};
        res.json(sector);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updateSector = async (req,res)=>{
    const {id} =req.params;
    const{nombreSector, ID_CENTROSALUD} = req.body;

    try {
        const sector = await Sector.findByPk(id);
        if(!sector){
            return res.status(404).json({message: 'Sector no encontrado o no existe, no se puede actualizar'});
        }else{
            sector.nombreSector = nombreSector;
            sector.ID_CENTROSALUD = ID_CENTROSALUD;
            await sector.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteSector = async(req,res)=>{
    try {
        const {id} = req.params;
        await Sector.destroy({
            where:{ID_SECTOR: id},
        });
        return res.status(200).json({message:'Sector Eliminado correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};