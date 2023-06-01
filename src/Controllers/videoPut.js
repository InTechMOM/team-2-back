import Video from '../Models/videoProject.js';



/**
 * @openapi
 * /project/{id}/assessment:
 *   put:
 *     tags:
 *       - /project
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
 *             $ref: '#/components/schemas/AssessmentRequest'
 *     
 *
 *     responses:
 *       200:
 *         description: Assessments updated successfully
 *       404:
 *         description: Video not found
 *       500:
 *         description: Internal Server Error
 *
 * components:
 *   schemas:
 *      AssessmentRequest:
 *         type: object
 *         properties:
 *           assessments:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Assessment'
 *         required:
 *            - assessments
 * 
 *      Assessment:
 *        type: object
 *        properties:
 *          skill:
 *            type: string
 *          timestamp:
 *            type: string
 *          score:
 *            type: number
 *          comment:
 *            type: string
 *       
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