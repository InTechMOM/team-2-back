
import Joi from 'joi';

const validateUser=(request, response, next)=>{
  const userSchema=Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    rol:Joi.string().valid('student','teacher').required(),
  });

  const {error}=userSchema.validate(request.body);
  if (error) {
    const message =error.details.map((detail)=>detail.message).join(',');
    return response.status(400).json({message});
  }
  next();
}

export default validateUser;