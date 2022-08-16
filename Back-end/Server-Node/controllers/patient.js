import { pool } from "../db.js"

export const uploadPatient = async (req, res) => {
    res.json("Subiendo paciente")
}

export const getPatients = async (req, res) => {
    res.json("Obteniendo pacientes")
}

export const getPatient = async (req, res) => {
    res.json("Obteniendo a un paciente")
}

export const updatePatient = async (req, res) => {
    res.json("Actualizando paciente")
}

export const deletePatient = async (req, res) => {
    res.json("Eliminando paciente")
}