import express from 'express';
import { MainRoutes } from "./routes/main.routes.js";
import cors from 'cors';
const app = express();


//MIDDLEWARES

app.use(express.json()); //Permite interpretar datos I/O en formato JSON

//Agregar aqui los modulos de rutas para que la API los disponibilice
app.use(cors());
app.use(MainRoutes);


export default app;
