import Video from '../Models/videoProject.js';

/**
 * @openapi
 * /project/createVideo:
 *   post:
 *     summary: Create new project
 *     description: Create new project video
 *     tags: 
 *       - /project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VideoInput'
 *     responses:
 *       200:
 *         description: Project created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VideoResponse'
 *       
 *       500:
 *         description: Internal Server Error
 * 
 * components:
 *   schemas:
 *     VideoInput:
 *       type: object
 *       properties:
 *         studentName:
 *           type: string
 *         studentLastName:
 *           type: string
 *         studentEmail:
 *           type: string
 *         teachEmail:
 *           type: string
 *         url:
 *           type: string
 *         projectName:
 *           type: string
 *         description:
 *           type: string
 *       required:
 *         - studentName
 *         - studentLastName
 *         - studentEmail
 *         - teachEmail
 *         - url
 *         - projectName
 *         - description
 *     VideoResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         data:
 *           $ref: '#/components/schemas/Video'
 *     Video:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         studentName:
 *           type: string
 *         studentLastName:
 *           type: string
 *         studentEmail:
 *           type: string
 *         teachEmail:
 *           type: string
 *         url:
 *           type: string
 *         projectName:
 *           type: string
 *         description:
 *           type: string
 *         creationDate:
 *           type: string
 *           format: date-time
 */



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