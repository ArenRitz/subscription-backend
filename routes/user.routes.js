import { Router } from "express";
import {getUser, getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";
const userRouter = Router();

// GET all users
userRouter.get('/', getUsers);
// GET user by ID
userRouter.get('/:id', authorize, getUser);
// CREATE user
userRouter.post('/', (req, res) => res.send({title:'CREATE user'}));
// UPDATE user by ID
userRouter.put('/:id', (req, res) => res.send({title:'UPDATE user by ID'}));
// DELETE
userRouter.delete('/:id', (req, res) => res.send({title:'CREATE user'}));


export default userRouter;