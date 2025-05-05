import express from "express";
import Admin from '../models/adminModel.js'
import jwt from 'jsonwebtoken';



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

    const token = await admin.generateToken();
    return res.status(200).json({ 
      _id: admin._id, 
      username: admin.username,
      token: token 
    }); 

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});



const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (ex) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};


router.get('/protected', verifyToken, async (req, res) => {
  // Only accessible if the token is valid
  res.status(200).json({ message: 'Hello, ' + req.admin.adminId });
  
});






router.get('/verify-token', (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const secretKey = process.env.JWT_SECRET;

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }

    return res.send('Token is valid');
  });
});


/* Removed for security reasons 
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
*/


export default router;