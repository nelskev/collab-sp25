import express from "express";
import Appointment from '../models/appointmentModel.js';

const router = express.Router();


// GET All Appointments 
router.get('/', async (req, res) => {
    const allAppointments = await Appointment.find()
    console.log(allAppointments);
    res.status(200).json(allAppointments);
});


// GET user data 
router.get('/:date', async (req, res) => {
  const {date} = req.params;
  console.log(req.params);

});


// POST Appointment
router.post('/', async (req, res) => {
    const { date, time } = req.body;
    console.log(req.body);
 
});

// DELETE Appointment
router.delete('/:id', async (req, res) => {
    const { id: appointmentId } = req.params;   
    console.log(req.params);
});