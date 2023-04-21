import express, { request, response }  from 'express';
import { port } from './config/index.js';
import mongoose from "mongoose"; 
import  { mongo_uri } from './config/index.js';



const app = express();

app.get('/', (request, response, error) => {
  response.send('Status: OK')
})

//Conexion a la base de Datos

mongoose.connect(mongo_uri) 
.then(() => console.log("DB Connected")) 
.catch((error) => console.error(error));





app.listen(port, (error)=> {
  if (error) {
   console.log('Server error: Failed') 
   process.exit(1);
  }
  console.log(`Server listening in port ${port}`)

})


