const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Register a new admin
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ username, password: hashedPassword });
        await newAdmin.save();
        res.status(201).json({ message: "Admin created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating admin" });
    }
});

// Login an existing admin
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(401).json({ message: "Invalid credentials" });

        const isValidPassword = await bcrypt.compare(password, admin.password);
        if (!isValidPassword) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ adminId: admin._id }, process.env.SECRET_KEY, {
            expiresIn: "1h",
        });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in admin" });
    }
});

// Get all admins
router.get("/", async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: "Error fetching admins" });
    }
});

// Get an admin by ID
router.get("/:id", async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) return res.status(404).json({ message: "Admin not found" });
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: "Error fetching admin" });
    }
});

// Update an admin
router.put("/:id", async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findById(req.params.id);
        if (!admin) return res.status(404).json({ message: "Admin not found" });

        if (username) admin.username = username;
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            admin.password = hashedPassword;
        }

        await admin.save();
        res.status(200).json({ message: "Admin updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating admin" });
    }
});

// Delete an admin
router.delete("/:id", async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) return res.status(404).json({ message: "Admin not found" });
        res.status(200).json({ message: "Admin deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting admin" });
    }
});