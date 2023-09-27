import { CentroSalud } from "../models/CentroSalud";

export const createCentroSalud = async (req,res)=>{
    const {nombreCentroSalud,ID_COMUNA} = req.body;

    try {
        const nuevoCS = await CentroSalud.create({
            nombreCentroSalud,
            ID_COMUNA
        });
        res.json(nuevoCS);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readCentrosSalud = async (req,res)=>{
    try {
        const centros = await CentroSalud.findAll();
        res.json(centros);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readCentroSalud = async (req,res)=>{
    const {id} = req.params;
    try {
        const centro = await CentroSalud.findByPk(id);

        if(!centro){return res.status(404).json({message: 'Centro de Salud no encontrado o no existe'})};
        res.json(centro);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updateCentroSalud = async (req,res)=>{
    const {id} = req.params;
    const {nombreCentroSalud, ID_COMUNA} = req.body;

    try {
        const centro = await CentroSalud.findByPk(id);
        if(!centro){
            return res.status(404).json({message: 'Centro de salud no encontrado o no existe'});
        }else{
            centro.nombreCentroSalud = nombreCentroSalud;
            centro.ID_COMUNA = ID_COMUNA;

            await centro.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deleteCentroSalud = async (req,res) =>{
    try {
        const {id} = req.params;
        await CentroSalud.destroy({
            where:{ID_CENTROSALUD: id},
        });
        return res.status(200).json({message: 'Centro de Salud Eliminado correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}