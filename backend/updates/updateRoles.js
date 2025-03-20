import mongoose from 'mongoose';
import Employee from './employeeSchema.js';
import connectToDatabase from '../database.js';  
import dotenv from 'dotenv';
dotenv.config();

// Update function
async function updateManagerRole() {
  try {
    await connectToDatabase();   // Connect to the database
    const result = await Employee.updateMany(
      { role: 'manager' },
      { $set: { role: 'lead' } }
    );
    console.log(`Successfully updated ${result.modifiedCount} employees.`);
  } catch (error) {
    console.error('Error updating employee roles:', error);
  } finally {
    mongoose.disconnect();
  }
}

async function main() {
  await updateManagerRole();
}

main();