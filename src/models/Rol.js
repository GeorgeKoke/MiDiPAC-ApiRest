import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';

export const Rol = sequelize.define('ROL',{
    ID_ROL:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombreRol: DataTypes.STRING,
    descripcionRol: DataTypes.STRING,
},{
    tableName: 'ROL',
    timestamps: false,
});
