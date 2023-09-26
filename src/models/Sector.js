import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';
import {CentroSalud} from './CentroSalud.js';

export const Sector = sequelize.define('SECTOR',{
    ID_SECTOR:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombreSector: DataTypes.STRING,
    ID_CENTROSALUD: DataTypes.INTEGER,

},{
    tableName:'SECTOR',
    timestamps:false,
});

Sector.belongsTo(CentroSalud ,{
    foreignKey:'ID_CENTROSALUD',
    sourceKey:'ID_CENTROSALUD',
});