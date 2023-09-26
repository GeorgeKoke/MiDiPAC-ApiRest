import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';
import { CentroSalud } from './CentroSalud.js';
import { Sector } from './Sector.js';

export const CentroSalud_Sector = sequelize.define('CENTROSALUD_SECTOR',{
    ID_CENTROSALUD_SECTOR:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    ID_CENTROSALUD: DataTypes.INTEGER,
    ID_SECTOR: DataTypes.INTEGER,

},{
    tableName:'CENTROSALUD_SECTOR',
    timestamps:false,
});

CentroSalud_Sector.belongsTo(CentroSalud ,{
    foreignKey:'ID_CENTROSALUD',
    sourceKey:'ID_CENTROSALUD',
});
CentroSalud_Sector.belongsTo(Sector ,{
    foreignKey:'ID_SECTOR',
    sourceKey:'ID_SECTOR',
});