import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import SessionsController from '../controllers/SessionsController';

const sessionsController = new SessionsController();

const router = Router();

router.post(
    '/', 
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }
    }),
    sessionsController.create,
);

export default router;