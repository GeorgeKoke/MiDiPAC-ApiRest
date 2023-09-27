import { Persona } from "../models/Persona";

export const createPersona = async(req,res)=>{
    const { 
        RUT, 
        nombre, 
        apPaterno, 
        apMaterno, 
        nombreSocial, 
        fechaNacimiento, 
        edad, 
        telefono, 
        direccion, 
        ID_COMUNA, 
        ID_CENTROSALUD, 
        ID_SECTOR, 
        numFicha, 
        ID_FONASA, 
        ID_PROGRAMA, 
        fechaIngresoPrograma 
    } = req.body;

    try {
        const nuevaPersona = await Persona.create({
            RUT, 
            nombre, 
            apPaterno, 
            apMaterno, 
            nombreSocial, 
            fechaNacimiento, 
            edad, 
            telefono, 
            direccion, 
            ID_COMUNA, 
            ID_CENTROSALUD, 
            ID_SECTOR, 
            numFicha, 
            ID_FONASA, 
            ID_PROGRAMA, 
            fechaIngresoPrograma 
        });
        res.json(nuevaPersona);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readPersonas = async (req,res)=>{
    try {
        const personas = await Persona.findAll();
        res.json(personas);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const readPersona = async (req,res)=>{
    
    const {id} = req.params;
    try {
        const persona = await Persona.findByPk(id);

        if(!persona){return res.status(404).json({message: 'Persona no encontrada o no existe'})};
        res.json(persona);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const findPersona = async (req,res)=>{
    const {rut} = req.params;
    try {
        const persona = await Persona.findOne({
            where:[{RUT:rut}]
        });

        if(!persona){return res.status(404).json({message: 'Persona no encontrada o no existe'})};
        res.json(persona);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const updatePersona = async (req,res)=>{
    const {id} =req.params;
    const{
        RUT, 
        nombre, 
        apPaterno, 
        apMaterno, 
        nombreSocial, 
        fechaNacimiento, 
        edad, 
        telefono, 
        direccion, 
        ID_COMUNA, 
        ID_CENTROSALUD, 
        ID_SECTOR, 
        numFicha, 
        ID_FONASA, 
        ID_PROGRAMA, 
        fechaIngresoPrograma 
    } = req.body;

    try {
        const persona = await Persona.findByPk(id);
        if(!persona){
            return res.status(404).json({message: 'Persona no encontrada o no existe, no se puede actualizar'});
        }else{
            persona.RUT = RUT; 
            persona.nombre = nombre;
            persona.apPaterno = apPaterno; 
            persona.apMaterno = apMaterno; 
            persona.nombreSocial = nombreSocial; 
            persona.fechaNacimiento = fechaNacimiento; 
            persona.edad = edad;
            persona.telefono = telefono; 
            persona.direccion = direccion;
            persona.ID_COMUNA = ID_COMUNA;
            persona.ID_CENTROSALUD = ID_CENTROSALUD;
            persona.ID_SECTOR = ID_SECTOR; 
            persona.numFicha = numFicha;
            persona.ID_FONASA = ID_FONASA;
            persona.ID_PROGRAMA = ID_PROGRAMA;
            persona.fechaIngresoPrograma = fechaIngresoPrograma;
            await persona.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const deletePersona = async(req,res)=>{
    try {
        const {id} = req.params;
        await Persona.destroy({
            where:{ID_PERSONA: id},
        });
        return res.status(200).json({message:'Persona Eliminada correctamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};