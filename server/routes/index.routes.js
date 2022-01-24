import { Router } from 'express';
import imageRouter from './image.route';
const indexRouter = Router();

indexRouter.use(imageRouter);

export default indexRouter;
