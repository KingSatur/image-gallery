import { Router } from 'express';
import { deleteImageById, getImageById, getImages, uploadImage } from '../controllers/gallery.controller';

const imageRouter = Router();

imageRouter.get('/images/', getImages);
imageRouter.post('/images/upload', uploadImage);
imageRouter.get('/images/:id', getImageById);
imageRouter.delete('/images/:id', deleteImageById);

export default imageRouter;
