import mongoose from 'mongoose'
import logger from '../utils/logger';


// conectarse base de datos
const connectDBMongo = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000, // Tiempo de espera antes de fallar
        maxPoolSize: 10, // Límite de conexiones simultáneas
      });
  
      logger.info("Conexión exitosa a MongoDB Atlas");
    } catch (error) {
      logger.error("Error al conectar con MongoDB:", error.message);
      process.exit(1); // Detener la app si falla la conexión
    }
  };
  
export default connectDBMongo;