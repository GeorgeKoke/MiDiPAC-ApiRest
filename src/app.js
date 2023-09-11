import express from 'express';
import usuarioRoutes from './routes/usuario.routes.js';
import rolRoutes from './routes/rol.routes.js';
import cors from 'cors';
const app = express();


//MIDDLEWARES

app.use(express.json()); //Permite interpretar datos I/O en formato JSON

//Agregar aqui los modulos de rutas para que la API los disponibilice
app.use(cors());
app.use(usuarioRoutes);
app.use(rolRoutes);

export default app;
