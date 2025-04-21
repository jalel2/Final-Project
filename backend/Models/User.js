// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: {type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    verificationCode: { type: Number,default:null },
});

export default mongoose.model("User", userSchema);