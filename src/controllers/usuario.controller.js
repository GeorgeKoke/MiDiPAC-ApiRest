import { Op } from 'sequelize';
import { Usuario } from '../models/Usuario.js';

export const createUsuario = async (req, res) => {

    const { username, password, email, rut, nombre, apPaterno, apMaterno, fechaNacimiento, profesion, ID_ROL } = req.body
    try {
        const nuevoUsuario = await Usuario.create({
            username,
            password,
            email,
            rut,
            nombre,
            apPaterno,
            apMaterno,
            fechaNacimiento,
            profesion,
            ID_ROL
        });
        res.json(nuevoUsuario);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const readUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const readUsuario = async (req, res) => {
    try {
        var id;
        var rut;
        const params = req.params;
        if(params.id.length >= 8){
            id = params.rut || null;
            rut = params.id;
        }else{
            id = req.params.id || null;
            rut = req.params.rut || null;
        }

        const usuario = await Usuario.findOne({
            where:{
                [Op.or]:[
                    {ID_USUARIO: id},
                    {rut: rut}
                ]
            } 
        });
        if(!usuario) return res.status(404).json({message: 'Usuario no encontrado'});
        res.json(usuario);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateUsuario = async (req,res) => {
    const {id} = req.params;
    const {password, email, nombre, apPaterno, apMaterno, fechaNacimiento, profesion, ID_ROL} = req.body;
    try {
        const usuario = await Usuario.findByPk(id)
        usuario.password = password;
        usuario.email = email;
        usuario.nombre = nombre; 
        usuario.apPaterno = apPaterno;
        usuario.apMaterno = apMaterno;
        usuario.fechaNacimiento = fechaNacimiento;
        usuario.profesion = profesion;
        usuario.ID_ROL = ID_ROL;
    
        await usuario.save();
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}

export const deleteUsuario = async (req,res) => {
    try {
        const {id} = req.params;
        await Usuario.destroy({
            where: {
                ID_USUARIO: id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
}



