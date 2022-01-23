import { Router } from 'express';
import { deleteImageById, getImageById, getImages, uploadImage } from '../controllers/gallery.controller';

const galleryRouter = Router();

galleryRouter.get('/gallery/', getImages);
galleryRouter.post('/gallery/upload', uploadImage);
galleryRouter.post('/gallery/:id', getImageById);
galleryRouter.delete('/gallery/:id', deleteImageById);

export default galleryRouter;
