import { Router } from 'express';
import galleryRouter from './gallery.route';

const indexRouter = Router();

indexRouter.use(galleryRouter);

export default indexRouter;
