import express, { request, response }  from 'express';
import { port } from './config/index.js';



const app = express();

//Conexion a la base de Datos
const mongose=requiere(mongodb).mongose;
const uri='';

mongose.connect(uri, (err,db)=> {
if(err) throw err

const dbo=db.db("mydb");

dbo.collection('Collection name').find().toArray((err,result)=>{
if (err) throw err
console.log(result)
  })
})


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


