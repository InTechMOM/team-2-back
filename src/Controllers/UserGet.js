
import User from '../Models/User.js';

const getUserById=async(request, response)=>{
  const user=await User.findById(request.params.id);
  if (!user) {
    response.status(404).send('User not found');
  } else {
    response.send(user);
  }
}
export default getUserById;