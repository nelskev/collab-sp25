import mongoose from 'mongoose';

// Define Employee Schema
const employeeSchema = new mongoose.Schema({
    // id: { type: Number, required: true },  // mongo doesn't use typical int id's, they are long strings
    name: { type: String, required: true },
    age: { type: Number, required: true },
    salary: { type: Number },  // make this attribute Nullable
    role: {
        type: String,
        required: true,
        enum: ['manager', 'base-agent'] // enforce these options
    }
});

// Create Mongoose Model
const Employee = mongoose.model('Employee', employeeSchema);

// Let's say we want to change all 'managers' past and present to 'lead'
// We would change enum above to : enum: ['lead', 'base-agent']
// Make sure mongo connection is open and available then do the update
// Then in terminal: we would run 'node ./updates/updateRoles.js' from the backend folder
// This is a one time operation then we are done, and it's not constantly querying/updating

export default Employee;




