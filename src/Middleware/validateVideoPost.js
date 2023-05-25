
import Joi from 'joi';

const validateVideo=(request, response, next)=>{
  const videoSchema=Joi.object({
    studentName: Joi.string().required(),
    studentLastName: Joi.string().required(),
    studentEmail: Joi.string().required(),
    teachEmail: Joi.string().required(),
    url: Joi.string().required(),
    projectName: Joi.string().required(),
    description: Joi.string().required()
    
  });

  const {error}=videoSchema.validate(request.body);
  if (error) {
    const message =error.details.map((detail)=>detail.message).join(',');
    return response.status(400).json({message});
  }
  next();
}

export default validateVideo;