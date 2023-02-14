import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minLength: 6
    },
    lastName: {
        type: String,
        maxLength: 20,
        default: 'lastName',
        trim: true
    },
    location: {
        type: String,
        maxLength: 20,
        trim: true,
        default: 'my city'
    }
});

export default mongoose.model('User', UserSchema);