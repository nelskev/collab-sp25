import Joi from 'joi';

export const responseValidationSchema = Joi.object({
    ownerResponse: Joi.string()
      .trim()
      .min(4)
      .max(250)
      .required(),

    ownerResponseDate: Joi.date()
      .allow(null),
  });
  
