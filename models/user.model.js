import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'User Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, 'Please input a valid email address'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6,

    }


}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;