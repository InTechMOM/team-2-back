import express from 'express';
const router=express.Router();
import  createUser  from '../Controllers/userPost.js';
import  getUserByEmail  from '../Controllers/UserGet.js';
import validateUser from '../Middleware/validateUserPost.js';
import createVideo from '../Controllers/videoPost.js';
import validateVideo from '../Middleware/validateVideoPost.js';
import getVideoProjects from '../Controllers/videoGet.js';
import videoPutAssesment from '../Controllers/videoPut.js';

//Rutas User
router.get('/check-email', getUserByEmail);

router.post('/', validateUser, createUser);

//Rutas Video
router.post('/createVideo',validateVideo,createVideo);
router.get('/findProject',getVideoProjects);
router.put('/:id/assessment',videoPutAssesment);

export default router;