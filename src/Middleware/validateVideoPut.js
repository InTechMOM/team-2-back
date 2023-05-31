import Joi from 'joi';

const validateAssessment=(request, response, next)=>{
  const assessmentSchema = Joi.object({
    skill: Joi.string().required(),
    timestamp: Joi.string().required(),
    score: Joi.number().required(),
    comment: Joi.string().required()
  });

  const { assessments } = request.body;

  const { error } = Joi.array().items(assessmentSchema).validate(assessments);



  if (error) {
    return response.status(400).json({ message: error.details[0].message });
  }
  next();
  
}

export default validateAssessment;