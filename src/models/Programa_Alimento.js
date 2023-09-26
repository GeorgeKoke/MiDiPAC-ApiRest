import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';
import { Alimento } from './Alimento.js';
import { Programa } from './Programa.js';

export const Programa_Alimento = sequelize.define('PROGRAMA_ALIMENTO',{
    ID_PROGRAMA_ALIMENTO:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    ID_PROGRAMA: DataTypes.INTEGER,
    ID_ALIMENTO: DataTypes.INTEGER,

},{
    tableName:'PROGRAMA_ALIMENTO',
    timestamps:false,
});

Programa_Alimento.belongsTo(Alimento ,{
    foreignKey:'ID_ALIMENTO',
    sourceKey:'ID_ALIMENTO',
});

Programa_Alimento.belongsTo(Programa ,{
    foreignKey:'ID_PROGRAMA',
    sourceKey:'ID_PROGRAMA',
});