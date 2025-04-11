import { Router } from "express";

const userRouter = Router();

// GET all users
userRouter.get('/', (req, res) => res.send({title:'GET all users'}));
// GET user by ID
userRouter.get('/:id', (req, res) => res.send({title:'GET user by ID'}));
// CREATE user
userRouter.post('/', (req, res) => res.send({title:'CREATE user'}));
// UPDATE user by ID
userRouter.put('/:id', (req, res) => res.send({title:'UPDATE user by ID'}));
// DELETE
userRouter.delete('/:id', (req, res) => res.send({title:'CREATE user'}));


export default userRouter;