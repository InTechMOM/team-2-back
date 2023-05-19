
import User from '../Models/User.js';

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

const getUserByEmail=async(request, response,next)=>{
  try {
    const {email}=request.query;
    const user=await User.findOne({email});
  if (!user) {
    return response.status(404).send('User not found');
  } if (!email) {
    return response.status(400).send('Email are required');
  }
    return response.status(200).json(user);
  
    
  } catch (error) {
    next(error);
  }
  
}
export default getUserByEmail;