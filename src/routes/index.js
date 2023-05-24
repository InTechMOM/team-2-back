import express from 'express';
const router=express.Router();
import  createUser  from '../Controllers/userPost.js';
import  getUserByEmail  from '../Controllers/UserGet.js';
import validateUser from '../Middleware/validateUserPost.js';


//Raiz
router.get('/check-email', getUserByEmail);

router.post('/', validateUser, createUser);

export default router;