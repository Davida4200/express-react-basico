import express from 'express';
import mongoose from 'mongoose';
import usersRoutes from './routes/user.js'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const port = 3002;

app.use(express.json())

// Permite el acceso de las peticiones desde un cliente con el puerto 5173
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', usersRoutes)

app.listen(port);
console.log(`Servidor ejecutandose en el puerto ${port}
http://localhost:${port}/`);

// Conexión con mongoDB local
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Conexión exitosa')
}).catch((err) => {
  console.error(`Se produjo un error: ${err}`)
});