import Joi from 'joi';

export const responseValidationSchema = Joi.object({
    ownerResponse: Joi.string()
      .trim()
      .min(4)
      .max(250)
      .required()
      .messages({
        'string.empty': 'To submit response, owner response must contain value',
        'string.min': 'Owner response must be at least 4 characters long',
        'string.max': 'Owner response can be maximum 250 characters long',
      }),

    ownerResponseDate: Joi.date()
      .allow(null)
      .messages({
        'date.base': 'An error occurred processing the owner response date',
      }),   
  });
  
