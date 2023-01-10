import { goodSchema } from './good';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        match: /^[a-zA-Z]+$/,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        // match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, //Minimum eight characters, at least one letter and one number
    },
    cart: [{
        count: {
            type: Number,
            min: 1,
            max: 10
        },
        good: goodSchema
    }]
})

const User = mongoose.model("User", userSchema);

module.exports = User;