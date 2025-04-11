import mongoose from 'mongoose';

// Define User Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  //details: { type: String, required: true }, // Additional field for details. Updated 04/09/25 by MR
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;