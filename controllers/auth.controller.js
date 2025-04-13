import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {JWT_EXPIRES_IN, JWT_SECRET} from "../config/env.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
    // Implement sign up logic
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        //Create new user

        const {name, email, password} = req.body;

        //Check if user already exist

        const existingUser = await User.findOne({email});

        if (existingUser) {
            const error = new Error('User already exist');
            error.statusCode = 409;
            throw error;
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create([{name, email, password: hashedPassword}], {session});

        const token = jwt.sign({userId: newUser[0].id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        await session.endSession();

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                user: newUser[0],
                token
            }

        });

    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        next(error);

    }


}

export const signIn = async (req, res, next) => {
    // Implement sign up logic
}

export const signOut = async (req, res, next) => {
    // Implement sign up logic
}