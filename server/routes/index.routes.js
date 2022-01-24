import { Router } from 'express';
import imageRouter from './gallery.route';
const indexRouter = Router();

indexRouter.use(imageRouter);

export default indexRouter;
