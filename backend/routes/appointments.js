import express from "express"
import Appointment from '../models/appointmentModel.js'

const router = express.Router()
//  JOI npm library for validation
//  Add date-picker npm library
//  add name, phone and email to model ------>  ( Marco is doing this )

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
    const allAppointments = await Appointment.find()       // find()
    console.log(allAppointments)
    res.status(200).json(allAppointments)
})


// POST Appointment
router.post('/', async (req, res) => {
    const { date, time, details, name, email, phone } = req.body

    try {
      const existingAppointments = await Appointment.findOne({ date, time });  // only check time & date or it will still let another user pick that time slot!
      
      if (!existingAppointments) { 
        const newAppointment = new Appointment({ date, time, details, name, email, phone })  
        await newAppointment.save()                                                                         //save()
        res.status(200).json(newAppointment)
        //console.log(newAppointment)
      }else{
        res.status(400).json('Appointment already taken')
      }

    } catch (error) {
      console.error(error)
      res.status(500).json('Internal server error.')
    }
})

// UPDATE Appointment
router.put('/:id', async (req, res) => {
    const { date, time, details, name, email, phone } = req.body;
  
    try {
      const updatedAppointment = await Appointment.findByIdAndUpdate(     // findByIdAndUpdate()
        req.params.id,
        { date, time, details, name, email, phone },
        { new: true } 
      );
  
      if (!updatedAppointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
  
      res.status(200).json(updatedAppointment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


// DELETE Appointment
router.delete('/:id', async (req, res) => {
  const { id: appointmentId } = req.params // 

  try {
    const result = await Appointment.deleteOne({ _id: appointmentId })     // deleteOne()
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Appointment not found' })
    }

    res.status(200).json({ message: 'Appointment deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})


export default router