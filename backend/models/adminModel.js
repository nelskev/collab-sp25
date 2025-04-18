import mongoose from "mongoose";
const bcrypt = require("bcrypt");


const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    });



/*
adminSchema.pre("save", function(next) {
    // Hash password before saving
    bcrypt.hash(this.password, 10, function(err, hash) {
        if (err) return next(err);
        this.password = hash;
        next();
    });
    });
    
    adminSchema.methods.comparePassword = function(password, next) {
    // Compare password
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return next(err);
        next(null, isMatch);
    });
    };

    */
      


adminSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

adminSchema.pre("save", async function(next) {
    if (this.isNew || this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;