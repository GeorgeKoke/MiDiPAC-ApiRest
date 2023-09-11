import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';
import { Rol } from './Rol.js';

export const Usuario = sequelize.define('USUARIO',{
    ID_USUARIO:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    rut: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apPaterno: DataTypes.STRING,
    apMaterno: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    profesion: DataTypes.STRING,
    ID_ROL: DataTypes.INTEGER,
    fechaRegistro:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,  
    },
     
},{
    tableName: 'USUARIO',
    timestamps:false,
});

Usuario.belongsTo(Rol ,{
    foreignKey:'ID_ROL',
    sourceKey:'ID_ROL',
});
