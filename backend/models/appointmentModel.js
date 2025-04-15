import mongoose from 'mongoose';

// Define User Schema
const appointmentSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true }, // "08:00", "09:00", etc.
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    details: { type: String, required: true }, 
});

// Create Mongoose Model
const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;


// Let's say we want to change all 'managers' past and present to 'lead'
// We would change enum above to : enum: ['lead', 'base-agent']
// Make sure mongo connection is open and available then do the update
// Then in terminal: we would run 'node ./updates/updateRoles.js' from the backend folder
// This is a one time operation then we are done, and it's not constantly querying/updating


//  Hoppscotch/Postman POST request sample:
// {
//   "date": "2025-5-27",
//   "time": "10:00",
//   "name": "William",
//   "email": "will@email.com",
//   "phone": "555-230-1278",
//   "details": "Get estimate to paint car"
// } 