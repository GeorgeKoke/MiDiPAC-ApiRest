import { CentroSalud_Sector } from "../models/CentroSalud_Sector.js";

export const createCS_Sector = async(req,res)=>{
    const {ID_CENTROSALUD, ID_SECTOR} = req.body;

    try {
        const nuevoCS_S = await CentroSalud_Sector.create({
            ID_CENTROSALUD, 
            ID_SECTOR
        });
        res.json(nuevoCS_S);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readCS_Sectores = async (req,res)=>{
    try {
        const cs_sectores = await CentroSalud_Sector.findAll();
        res.json(cs_sectores);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const findCS_SectoresByCS = async (req,res)=>{
    const {id} = req.params;
    try {
        const cs_sectores = await CentroSalud_Sector.findAll({
            where:[{
                ID_CENTROSALUD: id,
            }]
        });
        res.json(cs_sectores);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const findCS_SectoresBySector = async (req,res)=>{
    const {id} = req.params;
    try {
        const cs_sectores = await CentroSalud_Sector.findAll({
            where:[{
                ID_SECTOR: id,
            }]
        });
        res.json(cs_sectores);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readCS_Sector = async (req,res)=>{
    const {id} = req.params;
    try {
        const cs_sector = await CentroSalud_Sector.findByPk(id);

        if(!cs_sector){return res.status(404).json({message: 'Elemento no encontrado o no existe'})};
        res.json(cs_sector);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updateCS_Sector = async (req,res)=>{
    const {id} =req.params;
    const{ID_CENTROSALUD, ID_SECTOR} = req.body;

    try {
        const cs_sector = await CentroSalud_Sector.findByPk(id);
        if(!cs_sector){
            return res.status(404).json({message: 'Elemento no encontrado o no existe, no se puede actualizar'});
        }else{
            cs_sector.ID_CENTROSALUD = ID_CENTROSALUD; 
            cs_sector.ID_SECTOR = ID_SECTOR;
            await cs_sector.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteCS_Sector = async(req,res)=>{
    try {
        const {id} = req.params;
        await CentroSalud_Sector.destroy({
            where:{ID_CENTROSALUD_SECTOR: id},
        });
        return res.status(200).json({message:'Elemento Eliminado correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};