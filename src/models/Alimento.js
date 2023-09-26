import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';

export const Alimento = sequelize.define('ALIMENTO',{
    ID_ALIMENTO:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombreAlimento: DataTypes.STRING,
    sigla: DataTypes.CHAR,

},{
    tableName:'ALIMENTO',
    timestamps:false,
});