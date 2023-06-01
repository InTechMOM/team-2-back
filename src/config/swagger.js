import swaggerJSDoc from "swagger-jsdoc";


const swaggerOptions={
  definition:{
    openapi: '3.0.0',
    info:{
      title:'IntechMom MPV',
      version: '1.0.0',
    },
    
  },
  apis:['app.js',
  './src/Controllers/UserGet.js',
  './src/Controllers/userPost.js',
  './src/Controllers/videoPost.js',
  './src/Controllers/videoGet.js',
  './src/Controllers/videoPut.js'
],
}

export const openApiSpecification= swaggerJSDoc(swaggerOptions);