import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';

export const GrupoEtareo = sequelize.define('GRUPOETAREO',{
    ID_GRUPOETAREO:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    rango: DataTypes.STRING,

},{
    tableName:'GRUPOETAREO',
    timestamps:false,
});