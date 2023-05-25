import Video from '../Models/videoProject.js';

const createVideo=async(request,response,next)=>{
  try {
    const {studentName, studentLastName, studentEmail, teachEmail, url, projectName, description}=request.body;
    const creationDate=new Date().toISOString();
    const video=new Video ({studentName,studentLastName,studentEmail,teachEmail, url,projectName,description,creationDate});
    
    await video.save();
    response.status(200).json({
      message:'Project created',
      data:video
    });

  } catch (error) {
    next(error);
  }
};

export default createVideo;