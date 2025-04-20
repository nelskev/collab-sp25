import Joi from 'joi';

const contactValidationSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(1)
        .max(50)
        .required()
        .messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 1 character long',
        'string.max': 'Name must be at most 50 characters long',
        }),
    email: Joi.string()
        .trim()
        .min(1)
        .max(50)
        .email({ tlds: {allow: false}}) //email format
        .required()
        .messages({
        'string.empty': 'Email is required',
        'string.min': 'Email must be at least 1 character long',
        'string.max': 'Email must be at most 50 characters long',
        }),
    phone: Joi.string()
        .trim()
        .min(4)
        .max(15)
        .pattern(/^\d{7,15}$/) //phone format, limits to 7 and 15 digits
        .required()
        .messages({
        'string.empty': 'Phone Number is required',
        'string.min': 'Phone Number must be at least 7 digits long',
        'string.max': 'Phone Number must can be maximum 15 digits long',
        }),
    details: Joi.string()
        .trim()
        .min(4)
        .max(250)
        .required()
        .messages({
        'string.empty': 'Details is required',
        'string.min': 'Details must be at least 4 characters long',
        'string.max': 'Details must can be maximum 250 characters long',
        }),
    });

export default contactValidationSchema;