import Video from '../Models/videoProject.js';

const videoPutAssesment=async(request,response,next)=>{
  const videoId = request.params.id;
  const newAssessment = request.body.assessment;
try {
   // Buscar el video por ID
   const existingVideo = await Video.findById(videoId);

   if (!existingVideo) {
    return response.status(404).json({ error: 'Video no encontrado' });
  }
  
   // Agregar las nuevas calificaciones al objeto de calificaciones existente
   existingVideo.assessments.push(newAssessment);
  
    
    
   // Guardar el video actualizado
   const updatedVideo = await existingVideo.save();

   response.status(200).json(updatedVideo);
  
} catch (error) {
  next(error);
}
};
export default videoPutAssesment;