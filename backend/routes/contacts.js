import express from 'express';
import Contact from '../models/contactModel.js';
import contactSchema from '../validation/contactValidation.js'  // joi - use in POST
//import { contactValidationSchema } from '../validation/contactValidation.js';

const router = express.Router();

// GET All Contacts
router.get('/', async (req, res) => {
    try {
        const allContacts = await Contact.find()
        console.log(allContacts);
        res.status(200).json(allContacts);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching contacts" });
    }
});

// GET Contact by ID
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ status: "Contact not found" });
        }
        res.status(200).json(contact);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching contact" });
    }
});

//New POST Contact
router.post('/', async (req, res) => {
    const { name, phone, email, details } = req.body;
    console.log(req.body);
    const validationResult = contactSchema.validate(req.body)    // joi
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.details });
    }
    try {
        const existingContacts = await Contact.findOne({ name, phone, email, details })
        if(!existingContacts) {  // before saving, query DB to see if the contact is already taken. If taken send error
            const newContact = new Contact({ name, phone, email, details });
            await newContact.save();
            res.status(201).json(newContact);
        } else{
            res.status(409).json({ code: 409, status: "Conflict", error: "Contact Already Taken" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error saving contact", error: err.message });
    }
});

export default router;