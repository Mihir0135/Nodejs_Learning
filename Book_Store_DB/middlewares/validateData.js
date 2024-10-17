const Joi = require("joi");

const validateBook = (req, res, next) => {
  const bookSchema = Joi.object({
    id: Joi.number().greater(0),
    title: Joi.string().min(0).max(30).required(),
    authorId: Joi.number().required().greater(0),
    categoryId: Joi.number().required().greater(0),
    publicationYear: Joi.number()
      .required()
      .min(1000)
      .max(new Date().getFullYear()),
  });

  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateAuthor = (req, res, next) => {
  const bookSchema = Joi.object({
    id: Joi.number().greater(0),
    name: Joi.string().min(0).max(30).required(),
    biography: Joi.string().required(),
  });

  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateCategory = (req, res, next) => {
  const bookSchema = Joi.object({
    id: Joi.number().greater(0),
    name: Joi.string().min(0).max(30).required(),
    description: Joi.string().required(),
  });

  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validateBook, validateAuthor, validateCategory };
