import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    {
        username:'georgekoke',
        password:'kpoZIaohuRdOeiVuPCei306uteGNpI0f',
        database:'logindb_04rj',
        host: 'dpg-cjio6kvjbvhs73aeq1q0-a.oregon-postgres.render.com',
        dialect: 'postgres',
        port: 5432,
        dialectOptions:{
            ssl: {
                require:true,
                rejectUnauthorized:false,
            },
            setTimeout:60000,
        },
    }
);