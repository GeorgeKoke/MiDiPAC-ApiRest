import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';

export const EstadoNutricional = sequelize.define('ESTADONUTRICIONAL',{
    ID_ESTADONUTRICIONAL:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    estado: DataTypes.STRING,

},{
    tableName:'ESTADONUTRICIONAL',
    timestamps:false,
});