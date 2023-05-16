import User from '../Models/User.js';

const createUser=async(request,response,next)=>{
  try {
    const {name, lastname, email, rol}=request.body;
    const creationDate=new Date().toISOString();
    const user=new User ({name,lastname,email,rol,creationDate});
    await user.save();
    response.status(200).json({message:'User create successfully'});

  } catch (error) {
    next(error);
  }
};

export default createUser;