import Video from '../Models/videoProject.js';


const getVideoProjects=async(request, response,next)=>{
  try {
    const {teachEmail,studentName}=request.query;
    const filter={
      ...teachEmail && {teachEmail},
      ...studentName && {studentName}
    };

  
    const video=await Video.find(filter);
    return response.status(200).json(video);
  
    
  } catch (error) {
    next(error);
  }
  
}
export default getVideoProjects;