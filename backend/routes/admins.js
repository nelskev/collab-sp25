const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");



 

import express from "express";

const router = express.Router();

// GET All Admins
router.get("/", async (req, res) => {
    try {
        const admins = await Admin.find(); 
        // res.json(admins);
        return res.status(200).json(admins);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching admins" });
    }
    
});

// GET REVIEW BY ID
router.get("/:id", async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);  
        if (!admin) {
            return res.status(404).json({ status: "Admin not found" });
        }
        // res.json(admin);
        return res.status(200).json(admin);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching admin" });
    }
});

// POST NEW REVIEW
router.post("/", async (req, res) => {
    const { username, password } = req.body; 
    console.log('POST request received at /admins');
    console.log('Request body:', req.body);
    try {
        const newAdmin = new Admin({ username, password });  
        await newAdmin.save();  
        res.status(201).json(newAdmin);  
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error saving admin" });
    }
});

// UPDATE REVIEW 
router.put("/:id", async (req, res) => {
    const { username, password} = req.body;
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(
            req.params.id,
            { username, password},
            { new: true }  
        );
        if (!updatedAdmin) {
            return res.status(404).json({ status: "Admin not found" });
        }
        res.json({ status: `${updatedAdmin.username} has been updated` });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error updating admin" });
    }
});

// DELETE REVIEW
router.delete("/:id", async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
        if (!deletedAdmin) {
            return res.status(404).json({ status: "Admin not found" });
        }
        res.json({ status: `Admin "${deletedAdmin.username}" deleted` });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error deleting admin" });
    }
});

export default router;

