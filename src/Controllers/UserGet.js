
import User from '../Models/User.js';

const getUserById=async(request, response,next)=>{
  try {
    const user=await User.findById(request.params.id);
  if (!user) {
    response.status(404).send('User not found');
  } else {
    response.send(user);
  }
    
  } catch (error) {
    next(error);
  }
  
}
export default getUserById;