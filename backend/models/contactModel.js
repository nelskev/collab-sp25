import mongoose from 'mongoose';

// Define User Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true } //update this
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;