import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Comuna } from './Comuna.js';
import { CentroSalud } from './CentroSalud.js';
import { Sector } from './Sector.js';
import { Fonasa } from './Fonasa.js';
import { Programa } from './Programa.js';

export const Persona = sequelize.define('PERSONA', {
    ID_PERSONA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    RUT: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apPaterno: DataTypes.STRING,
    apMaterno: DataTypes.STRING,
    nombreSocial: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    edad: DataTypes.INTEGER,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    ID_COMUNA: DataTypes.INTEGER,
    ID_CENTROSALUD: DataTypes.INTEGER,
    ID_SECTOR: DataTypes.INTEGER,
    numFicha: DataTypes.INTEGER,
    ID_FONASA: DataTypes.INTEGER,
    ID_PROGRAMA: DataTypes.INTEGER,
    fechaIngresoProgram: DataTypes.DATE,

}, {
    tableName: 'PERSONA',
    timestamps: false,
});

Persona.belongsTo(Comuna ,{
    foreignKey:'ID_COMUNA',
    sourceKey:'ID_COMUNA',
});
Persona.belongsTo(CentroSalud ,{
    foreignKey:'ID_CENTROSALUD',
    sourceKey:'ID_CENTROSALUD',
});
Persona.belongsTo(Sector ,{
    foreignKey:'ID_SECTOR',
    sourceKey:'ID_SECTOR',
});
Persona.belongsTo(Fonasa ,{
    foreignKey:'ID_FONASA',
    sourceKey:'ID_FONASA',
});
Persona.belongsTo(Programa ,{
    foreignKey:'ID_PROGRAMA',
    sourceKey:'ID_PROGRAMA',
});
