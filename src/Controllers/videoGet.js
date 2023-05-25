import Video from '../Models/videoProject.js';


const getVideoProjects=async(request, response,next)=>{
  try {
    const {teachEmail,studentName,studentEmail}=request.query;
    const filter={
      ...teachEmail && {teachEmail},
      ...studentName && {studentName},
      ...studentEmail && {studentEmail}
    };

  
    const video=await Video.find(filter);
    return response.status(200).json(video);
  
    
  } catch (error) {
    next(error);
  }
  
}
export default getVideoProjects;