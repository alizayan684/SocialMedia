import express from 'express';
import { getUserByID, editUser } from '../controllers/users.js';
const userRouter = express.Router();

userRouter.get('/:id', getUserByID);
userRouter.get('/:id', editUser);

export default userRouter;