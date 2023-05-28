import Video from '../Models/videoProject.js';



/**
 * @openapi
 * /users/project/{id}/assessment:
 *   put:
 *     tags:
 *       - /users
 *     summary: Add evaluation to a video
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of video
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssessmentInput'
 *          
 *               
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Video not found
 *       500:
 *         description: Internal Server Error
 * 
 * components:
 *   schemas:
 *     AssessmentInput:
 *       type: object
 *       properties:
 *         assessment:
 *           type: object
 *           properties:
 *             skill:
 *               type: string
 *               description: Assessed ability.
 *             timestamp:
 *               type: string
 *               format: time
 *               description: Timestamp of the assessment on the video.
 *             score:
 *               type: number
 *               description: Score of video  1-5.
 *             comment:
 *               type: string
 *               description: Comments of video .
 *         
 *       required:
 *         - skill
 *         - timestamp
 *         - score
 *       
 */

const videoPutAssesment=async(request,response,next)=>{
  const videoId = request.params.id;
  const newAssessment = request.body.assessment;
try {
   // Buscar el video por ID
   const existingVideo = await Video.findById(videoId);

   if (!existingVideo) {
    return response.status(404).json({ error: 'Video not found' });
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