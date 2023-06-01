import User from '../Models/User.js';

/**
 * @openapi
 * /users:
 *   post:
 *     tags:
 *       - /users
 *     summary: Create new user 
 *     description: Create new user tecaher or student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: User create successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       
 *       500:
 *         description: Internal Server Error
 * 
 * components:
 *   schemas:
 *     UserInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *         rol:
 *           type: string
 *       required:
 *         - name
 *         - lastName
 *         - email
 *         - rol
 *     UserResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         data:
 *           $ref: '#/components/schemas/UserData'
 *     UserData:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         
 *         name:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *         rol:
 *           type: string
 *         creationDate:
 *           type: string
 *           format: date-time
 * 
 */

const createUser=async(request,response,next)=>{
  try {
    const {name, lastName, email, rol}=request.body;
    const creationDate=new Date().toISOString();
    const user=new User ({name,lastName,email,rol,creationDate});
    
    await user.save();
    response.status(200).json({
      message:'User create successfully',
      data:user
    });

  } catch (error) {
    next(error);
  }
};

export default createUser;