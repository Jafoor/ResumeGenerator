import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail.js';
const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        lowercase: true,
        unique: true,
        required: "Email address is required",
        validate: [isEmail, "Please fill a valid email address"],
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please fill a valid email address"
        ]
      },
      password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Mininum Password length is 8 characters"],
        // maxlength: [12, "Maximum Password length is 12 characters"]
      },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Authentication = mongoose.model('Authentication', authSchema);

export default Authentication;