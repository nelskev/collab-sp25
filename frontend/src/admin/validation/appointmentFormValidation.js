import Joi from 'joi';

const appointmentFormSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 2 characters',
    'string.max': 'Name must be less than 50 characters',
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Email must be valid',
  }),
  phone: Joi.string().trim().pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).required().messages({
    'string.empty': 'Phone is required',
    'string.pattern.base': 'Phone must be xxx-xxx-xxx or (xxx) xxx-xxxx',
  }),
  details: Joi.string().min(10).max(400).required().messages({
    'string.empty': 'Details are required',
    'string.min': 'Details must be at least 10 characters',
    'string.max': 'Details must be less than 400 characters',
  }),
});

export default appointmentFormSchema;