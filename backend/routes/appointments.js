import express from "express";
import Appointment from '../models/appointmentModel.js';

const router = express.Router();

const getAvailableSlotsForDate = async (dateStr) => {
  try {
      // Convert dateStr to start and end of the day in UTC
      const startOfDay = new Date(dateStr + 'T00:00:00');
      startOfDay.setUTCHours(0, 0, 0, 0);

      const endOfDay = new Date(dateStr + 'T23:59:59');
      endOfDay.setUTCHours(23, 59, 59, 999);

      const allSlots = [
          "09:00", "10:00", "11:00",
          "13:00", "14:00", "15:00", "16:00", "17:00",
          "18:00"
      ];

      // Query appointments within the day
      const bookedAppointments = await Appointment.find({
          date: {
              $gte: startOfDay,
              $lte: endOfDay
          }
      });

      console.log("Booked Appointments:", bookedAppointments);

      // Extract booked times
      const bookedTimes = bookedAppointments.map(appt => appt.time);

      // Filter available slots
      const availableSlots = allSlots.filter(slot => !bookedTimes.includes(slot));

      return availableSlots;
  } catch (error) {
      console.error("Error in getAvailableSlotsForDate:", error);
      return [];
  }
};

// GET All Appointments 
router.get('/', async (req, res) => {
    try {
        const allAppointments = await Appointment.find().populate('contact'); // Populate contact details
        console.log("Appointments with Contact Info:", allAppointments);
        res.status(200).json(allAppointments);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching appointments" });
    }
});

// Fetch available slots for a specific date, added by MarcoRamos 4/06/2025
router.get('/available-slots/:date', async (req, res) => {
  const { date } = req.params;
  console.log('Request for slots on:', date);

  try {
    const availableSlots =  await getAvailableSlotsForDate(date);
    console.log('Available Slots:', availableSlots);

    if (!availableSlots || availableSlots.length === 0) {
      return res.status(404).json({ message: 'No available slots found.' });
    }

    res.json(availableSlots);
  } catch (error) {
    console.error('Error fetching available slots:', error);
    res.status(500).json({ message: 'Server error' });
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
        const newAppointment = new Appointment({ date, time, details, contact: req.body.contact });  //populate appoinment task
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