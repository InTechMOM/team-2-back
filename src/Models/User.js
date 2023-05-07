
import mongoose from "mongoose"; 
const Schema=mongoose.Schema;

const userSchema=new Schema({
  name:{type: String, required:true},
  lastname: {type: String, required:true},
  email: {type: String, required:true, unique:true},
  rol:{
    type:String,
    enum:['student','teacher'],
    required:true,
  },
  creationDate:{type: Date, default: Date.now},

});

const User = mongoose.model('User', userSchema);
//module.exports=User;
export default User;