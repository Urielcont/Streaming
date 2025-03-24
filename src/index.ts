import { loadEnv } from "./config/env";
loadEnv()
import express from "express";
import { errors } from "celebrate";
import { errorHandler } from "./middleware/errorsCelebrate";
import cors from 'cors';
import cookieParser from "cookie-parser";
import logger from "./utils/logger";
import swaggerDocs  from "./utils/swagger";
import rutaUsers from "./routes/userRoutes";
// servidor de express
const app = express();

app.use(
  cors({
    origin: "*", // URL de frontend
    credentials: true, // Permite cookies y tokens en las solicitudes
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  })
);

// Middleware del servidor
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api/session", rutaUsers)
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.use(errors());
swaggerDocs(app);
// Middleware para manejar errores
app.use(errorHandler);

// Funcion para inicar el servidor en el puerto establecido
const startServerExpress = async () => {
    try {
     app.listen(process.env.PORT, () => {
        logger.info({message: `Servidor listo en el puerto: ${process.env.PORT}`})
        logger.info({message: `Documentacion de Apis con Swagger en http://localhost:${process.env.PORT}/api-docs`});
      });
  
    } catch (error) {
      logger.error("Error al conectar el servidor", error)
     
      process.exit(1); //Terminar el proceso
    }
  };
  
  //Iniciar el servidor y configuraciones iniciales
  startServerExpress();
