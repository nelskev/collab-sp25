import express from "express"
import Appointment from '../models/appointmentModel.js'

const router = express.Router()
//  JOI npm library for validation
//  Add date-picker npm library
//  add name, phone and email to model ------>  ( Marco is doing this )


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