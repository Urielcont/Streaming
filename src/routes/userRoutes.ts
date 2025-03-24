import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { validationSession } from "../validator/userValidator";

const router = Router();

// Documentacion Swagger Pendiente 
router.post(
  "/login",
  celebrate({
    [Segments.BODY]: Joi.object({
      email: Joi.string().min(3).max(250).email().messages(validationSession.email),
      password: Joi.string().required().messages(validationSession.password),
    }),
  }),
  
);

module.exports = router;

export default router;
