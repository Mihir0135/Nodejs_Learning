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

const validateUser = (req, res, next) => {
  const userSchema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    role: Joi.string().required(),
  });

  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

const validateAuthUser = (req, res, next) => {
  const authSchema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  const { error } = authSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

module.exports = {
  validateBook,
  validateAuthor,
  validateCategory,
  validateUser,
  validateAuthUser,
};
