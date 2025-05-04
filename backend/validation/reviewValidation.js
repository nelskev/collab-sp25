import Joi from 'joi';

const reviewValidationSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),
    rating: Joi.number()
        .min(1)
        .max(5)
        .required(),
    comment: Joi.string()
        .trim()
        .min(10)
        .max(400)
        .required(),
    reviewDate: Joi.date(),
  /*  ownerResponse: Joi.string()
        .trim()
        .min(4)
        .max(250)
        .optional(),
    ownerResponseDate: Joi.date()
        .optional(),*/
    });

export default reviewValidationSchema;