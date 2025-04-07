import mongoose from 'mongoose';

// Define User Schema
const appointmentSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true }, // "08:00", "09:00", etc.
    // name: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    // phone: { type: String, required: true },
    details: { type: String, required: true }, 
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }    // for now we are not relating users-to-appointments as users do not sign-in
});

// Create Mongoose Model
const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;




//  Hoppscotch/Postman POST request sample:
// {
//   "date": "2025-5-27",
//   "time": "10:00",
//   "name": "William",
//   "email": "will@email.com",
//   "phone": "555-230-1278",
//   "details": "Get estimate to paint car"
// } 