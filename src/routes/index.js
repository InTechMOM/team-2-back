import express from 'express';
const router=express.Router();
import  createUser  from '../Controllers/userPost.js';
import validateUser from '../Middleware/validateUserPost.js';

//Raiz
//router.get('/users/:id', methods.getUsers);

router.post('/', validateUser, createUser);

export default router;