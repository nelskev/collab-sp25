import Joi from 'joi';

const contactValidationSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(1)
        .max(50)
        .required(),
    email: Joi.string()
        .trim()
        .min(1)
        .max(50)
        .email({ tlds: {allow: false}}) //email format
        .required(),
    phone: Joi.string()
        .trim()
        .min(4)
        .max(15)
        .pattern(/^\d{7,15}$/) //phone format, limits to 7 and 15 digits
        .required(),
    details: Joi.string()
        .trim()
        .min(4)
        .max(250)
        .required(),
    });

export default contactValidationSchema;