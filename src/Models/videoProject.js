import mongoose from "mongoose"; 
const Schema=mongoose.Schema;

const videoSchema=new Schema({
  studentName:{type: String, required:true},
  studentLastName: {type: String, required:true},
  studentEmail: {type: String, required:true},
  teachEmail: {type: String, required:true},
  url: {type: String, required:true, unique:true},
  projectName: {type: String, required:true},
  description: {type: String, required:true},
  creationDate:{type: Date, default: Date.now},

}); 

const Video = mongoose.model('Video', videoSchema);

export default Video;