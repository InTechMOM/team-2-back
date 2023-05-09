import express from 'express';
const router=express.Router();
import  createUser  from '../Controllers/userPost.js';
import  getUserById  from '../Controllers/UserGet.js';
import validateUser from '../Middleware/validateUserPost.js';

//Raiz
router.get('/:id', getUserById);

router.post('/', validateUser, createUser);

export default router;