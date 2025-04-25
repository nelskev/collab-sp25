import express from "express";

// import bcrypt from "bcrypt";
// const saltRounds = 10; // Adjust the cost factor as needed

import Admin from "../models/adminModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const userExist = await Admin.findOne({ username });

  if (userExist) {
    return res.status(400).json({ message: "Admin already exists" });
  }

  console.log("Request body:", req.body);
  try {
    // const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    console.log(`Router.POST --->  ${err.message}`);
    res.status(500).json({ code: 500, status: "Error saving Admin" });
  }
});

export default router;

// try {
//     // Generate a salt and hash the password
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     // Store the username and hashed password in the database
//     // Example: await User.create({ username, password: hashedPassword });

//     res.status(201).send('User registered successfully.');
//     console.log('Received login data:', { username, password });
// } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).send('Internal server error.');
// }
