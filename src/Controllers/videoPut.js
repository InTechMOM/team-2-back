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

  
  
  try {
    const videoId = request.params.id;
    const { assessments } = request.body;

    const video = await Video.findById(videoId);

    if (!video) {
      return response.status(404).json({ message: 'Video not found' });
    }

    video.assessments.push(...assessments);
    await video.save();

    response.status(200).json({ message: 'Assessments updated successfully', data: video });
  } catch (error) {
    next(error);
  }

  
};
export default videoPutAssesment;