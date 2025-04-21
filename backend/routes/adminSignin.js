import express from "express";
import Admin from '../models/adminModel.js'

import bcrypt from "bcrypt"; 

const router = express.Router();




// POST LOGIN METHOD
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  // console.log('Login attempt for username:', username);

  try {
    const admin = await Admin.findOne({ username });
    // console.log('Found admin:', admin ? admin.username : 'not found');

    if (!admin) {
      return res.status(404).json({ message: 'Invalid username or password.' });
    }

    // Debug password comparison
    /*
    console.log('Comparing passwords:');
    console.log('Input password:', password);
    console.log('Stored hash:', admin.password);
    */
   // Debugging logs for hashing

    const isValidPassword = await admin.isPasswordValid(password);
    // console.log('Password validation result:', isValidPassword);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    res.status(200).json({ _id: admin._id }); 
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});



// TEMP METHOD TO RETURN ADMIN INFO
router.get('/:username', async (req, res) => {
  const { username } = req.params;

  // console.log('Getting admin with username:', username);

  try {
    const admin = await Admin.findOne({ username });

    // console.log('Admin found:', admin);

    if (!admin) {
      // console.log('Admin not found');
      return res.status(404).send('Admin not found.');
    }

    // console.log('Returning admin info');
    res.status(200).json(admin); 
  } catch (error) {
    console.error('Error during get:', error);
    res.status(500).json('Internal server error.');
  }
});

export default router;