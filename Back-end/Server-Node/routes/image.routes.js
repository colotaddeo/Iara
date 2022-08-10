import { Router } from "express";
const router = Router();


import { uploadImage, getImages, getImage, deleteImage, updateImage } from "../controllers/images.js";
import { upload } from "../middlewares/multer.js"

//Definiendo rutas de la aplicación


//Ruta que te permite subir una imagen 
router.post('/images/upload', upload, uploadImage);

//Ruta que te permite obtener todas las imagenes que subiste
router.get('/images', getImages);

//Ruta que te permite obtener solo una imagen
router.get('/images/:id', getImage);

//Ruta que te permite actualizar una imagen
router.put('/images/:id', updateImage);

//Ruta que te permite eliminar una imagen
router.delete('/images/:id', deleteImage);



export default router