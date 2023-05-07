

const errorHandler=(error,request, response, next)=>{
  console.log(error.stack);
  response.status(500).json({message:'Internal Server Error'});
};

//module.exports=errorHandler;
export default errorHandler;