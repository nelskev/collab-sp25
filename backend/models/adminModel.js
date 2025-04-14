import mongoose from "mongoose";
const bcrypt = require("bcrypt");



const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    });


const Admin = mongoose.model("Admin", adminSchema);

export default Admin;