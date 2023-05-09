import express, { request, response }  from 'express';
import { port } from './config/index.js';
import mongoose from "mongoose"; 
import  { mongo_uri } from './config/index.js';

mongoose.connect(mongo_uri);
const database=mongoose.connection;

database.on('error',(error=>{
  console.log(error);
}))

database.once('connected',()=>{
  console.log('Database Connected');
})

const app = express();

app.get('/', (request, response, error) => {
  response.send('Status: OK')
})


app.listen(port, (error)=> {
  if (error) {
   console.log('Server error: Failed') 
   process.exit(1);
  }
  console.log(`Server listening in port ${port}`)

})


