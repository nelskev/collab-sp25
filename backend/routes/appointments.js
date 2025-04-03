import express from "express";
import Appointment from '../models/appointmentModel.js';

const router = express.Router();


// GET All Appointments 
router.get('/', async (req, res) => {
    try {
        const allAppointments = await Appointment.find()
        console.log(allAppointments);
        res.status(200).json(allAppointments);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching appointments" });
    }
});

// GET Appointment by DATE ( will finish this later after deciding on filters )
router.get('/:date', async (req, res) => {
 
});



// POST Appointment
router.post('/', async (req, res) => {
    const { date, time, details } = req.body;
    console.log(req.body);

    try {
        const newAppointment = new Appointment({ date, time, details });  
        await newAppointment.save();  
        res.status(201).json(newAppointment);  
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error saving appointment" });
    }
 
});

// DELETE Appointment
router.delete('/:id', async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) {
            return res.status(404).json({ status: "Appointment not found" });
        }
        res.json({ status: `Appointment for ${deletedAppointment.time} deleted` });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error deleting appointment" });
    }
});

export default router;