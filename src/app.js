import express, { request, response }  from 'express';
import { port } from './config/index.js';
import mongoose from "mongoose"; 
import  { mongo_uri } from './config/index.js';
import morgan from 'morgan';
import  router  from './routes/index.js';
import bodyParser from 'body-parser';
import errorHandler from './Middleware/errorHandlerPOST.js'


//Conexion Mongoose
mongoose.connect(mongo_uri);
const database=mongoose.connection;

database.on('error',(error=>{
  console.log(error);
}))

database.once('connected',()=>{
  console.log('Database Connected');
})

const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());



//Routes
app.use('/users',router);

//Midleware para manejar errores 500
app.use(errorHandler);

app.listen(port, (error)=> {
  if (error) {
   console.log('Server error: Failed') 
   process.exit(1);
  }
  console.log(`Server listening in port ${port}`)

})


