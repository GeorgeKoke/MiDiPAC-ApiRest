import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';
import { GrupoEtareo } from './GrupoEtareo.js';
import { EstadoNutricional } from './EstadoNutricional.js';
import { Alimento } from './Alimento.js';
import { Persona } from './Persona.js';

export const HistorialEntrega = sequelize.define('HISTORIALENTREGA',{
    ID_ENTREGA:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    RUT: DataTypes.STRING,
    fechaEntrega: DataTypes.DATE,
    ID_GRUPOETAREO: DataTypes.INTEGER,
    ID_ESTADONUTRICIONAL: DataTypes.INTEGER,
    ID_ALIMENTO: DataTypes.INTEGER,
    cantidadEntregada: DataTypes.INTEGER,
    fechaProximaEntrega: DataTypes.DATE,

},{
    tableName:'HISTORIALENTREGA',
    timestamps:false,
});

HistorialEntrega.belongsTo(Persona ,{
    foreignKey:'RUT',
    sourceKey:'RUT',
});
HistorialEntrega.belongsTo(GrupoEtareo ,{
    foreignKey:'ID_GRUPOETAREO',
    sourceKey:'ID_GRUPOETAREO',
});
HistorialEntrega.belongsTo(EstadoNutricional ,{
    foreignKey:'ID_ESTADONUTRICIONAL',
    sourceKey:'ID_ESTADONUTRICIONAL',
});
HistorialEntrega.belongsTo(Alimento ,{
    foreignKey:'ID_ALIMENTO',
    sourceKey:'ID_ALIMENTO',
});