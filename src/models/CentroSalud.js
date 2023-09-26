import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';
import { Comuna } from './Comuna.js';

export const CentroSalud = sequelize.define('CENTROSALUD',{
    ID_CENTROSALUD:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombreCentroSalud: DataTypes.STRING,
    ID_COMUNA: DataTypes.INTEGER,
},{
    tableName: 'CENTROSALUD',
    timestamps:false,
});

CentroSalud.belongsTo(Comuna,{
    foreignKey:'ID_COMUNA',
    sourceKey:'ID_COMUNA'
});