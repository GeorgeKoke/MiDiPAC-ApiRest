import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';
import { GrupoEtareo } from './GrupoEtareo.js';

export const Programa = sequelize.define('PROGRAMA',{
    ID_PROGRAMA:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombrePrograma: DataTypes.STRING,
    ID_GRUPOETAREO: DataTypes.INTEGER,

},{
    tableName:'PROGRAMA',
    timestamps:false,
});

Programa.belongsTo(GrupoEtareo ,{
    foreignKey:'ID_GRUPOETAREO',
    sourceKey:'ID_GRUPOETAREO',
});