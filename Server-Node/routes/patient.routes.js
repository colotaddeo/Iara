import { Router } from "express";

const router = Router();

import {
  uploadPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
  getPatientBySearch,
  getPatientUploadedRecently
} from "../controllers/patient.js";
import auth from "../middlewares/authJwt.js";
import { upload } from "../middlewares/multer.js";


router.get("/patient/uploadedRecently", auth, getPatientUploadedRecently);

//Ruta que te permite buscar un paciente a partir de su DNI
router.get("/patient/search", auth, getPatientBySearch);
//Ruta que te permite subir un paciente
router.post("/patient/upload", auth, upload, uploadPatient);

//Ruta que te permite obtener todos los pacientes
router.get("/patient", auth, getPatients);

//Ruta que te permite obtener un paciente
router.get("/patient/:id", auth, getPatient);

//Ruta que te permite actualizar un paciente
router.put("/patient/:id", auth, updatePatient);

//Ruta que te permite eliminar un paciente
router.delete("/patient/:id", auth, deletePatient);


export default router;
