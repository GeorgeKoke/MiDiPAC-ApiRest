import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';

export const Fonasa = sequelize.define('FONASA',{
    ID_FONASA:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    letraFonasa: DataTypes.CHAR,

},{
    tableName:'FONASA',
    timestamps:false,
});