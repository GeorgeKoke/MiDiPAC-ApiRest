import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';

export const Comuna = sequelize.define('COMUNA',{
    ID_COMUNA:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombreComuna: DataTypes.STRING,

},{
    tableName:'COMUNA',
    timestamps:false,
});