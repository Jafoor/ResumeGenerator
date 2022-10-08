import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Authentication = mongoose.model('Authentication', authSchema);

export default Authentication;