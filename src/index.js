import app from './app.js';
import {sequelize} from './database/db.js';

//Importacion de Modelos
import './models/Usuario.js';
import './models/Rol.js';


async function main(){
    try {
        const port = 4000;
        await sequelize.sync();
        app.listen(port);
        console.log(`Server is listening on port: ${port}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

main();