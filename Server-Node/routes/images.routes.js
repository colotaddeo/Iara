import { Router } from "express";
const router = Router();

import {
  uploadImage,
  getImages,
  deleteImage,
  sendFile,
  saveImageRoute,
  getRecentImage
} from "../controllers/images.js";
import { upload } from "../middlewares/multer.js";
import auth from "../middlewares/authJwt.js";

//Definiendo rutas de la aplicación

//Ruta que te permite subir una imagen
router.post("/images/upload/:id_paciente", auth, upload, uploadImage);

router.post("/images/saveImageRoute", upload, saveImageRoute);

//Ruta que te permite obtener todas las imagenes que subiste
router.get("/images/:id", auth, getImages);

router.get("/recentImage/:id_paciente", auth, getRecentImage);

//Ruta que te permite obtener solo una imagen
//router.get("/images/:id_paciente/:id", auth, getImage);

//router.put("/images/:id_paciente/:id", auth, updateImage)

//Ruta que te permite eliminar una imagen
router.delete("/images/:id_paciente/:id", auth, deleteImage);

router.post("/images/sendFile", sendFile);



export default router;
