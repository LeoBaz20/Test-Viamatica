import express from 'express';
import peliculaRoutes from './routes/peliculasRoutes';
import salasRoutes from './routes/salasRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './config/Swagger';
import cors from 'cors';


const app = express();
app.use(cors());

app.use(express.json());
app.use('/', peliculaRoutes);
app.use('/', salasRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
