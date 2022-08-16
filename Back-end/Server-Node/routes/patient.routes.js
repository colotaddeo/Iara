import { Router } from "express";

const router = Router();

import { uploadPatient, getPatients, getPatient, updatePatient, deletePatient } from "../controllers/patient.js";

//Ruta que te permite subir un paciente
router.post('/patient/upload', uploadPatient)

//Ruta que te permite obtener todos los pacientes
router.get('/patient', getPatients)

//Ruta que te permite obtener un paciente
router.get('/patient/:id', getPatient)

//Ruta que te permite actualizar un paciente
router.put('/patient/:id', updatePatient)

//Ruta que te permite eliminar un paciente
router.delete('/patient/:id', deletePatient)

export default router