import Joi from 'joi';

const contactValidationSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),
    email: Joi.string()
        .trim()
        .email({ tlds: {allow: false}}) //email format
        .required(),
    phone: Joi.string()
        .trim()
        .pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) //phone format, limits to 7 and 15 digits
        .required(),
    details: Joi.string()
        .trim()
        .min(10)
        .max(400)
        .required(),
    });

export default contactValidationSchema;