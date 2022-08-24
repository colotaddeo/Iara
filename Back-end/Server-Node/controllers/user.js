import bcrypt from 'bcryptjs'
import { pool } from '../db.js'
import jwt from 'jsonwebtoken'
import { SECRET, REFRESH_TOKEN_SECRET } from '../config.js'


export const signUp = async (req, res) => {

    try {
        
        const {firstName, lastName, email, password, doctorId, HospitalName, HospitalEmail} = req.body

        const [existingUser] = await pool.query ("SELECT * FROM registro WHERE email = ?", [email])
        
        if(existingUser.length !== 0) return res.status(404).json({ message: "El usuario ya existe" });

        const [HospitalData] = await pool.query("INSERT INTO hospitales (nombre, email) VALUES (?, ?)",[HospitalName, HospitalEmail])

        const id_hospitales = HospitalData.insertId

        const hashedPassword = await bcrypt.hash(password, 12)

        const [DoctorData] = await pool.query("INSERT INTO registro (nombre, apellido, email, contrasenia, matricula, id_Hospital) VALUES (?, ?, ?, ?, ?, ?)",[firstName, lastName, email, hashedPassword, doctorId, id_hospitales])

        res.json({DoctorData, HospitalData})
    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const signIn = async (req, res) => {

    try {
        const { email, password } = req.body

        const [existingUser] = await pool.query("SELECT * FROM registro WHERE email = ?", [email])

        console.log(existingUser[0])

        if(existingUser.length === 0) return res.status(404).json({ message: "El usuario no existe"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser[0].contrasenia)

        if(!isPasswordCorrect) return res.status(400).json({ message: "La contraseña es inválida" })

        const token = jwt.sign({ id: existingUser[0].id }, SECRET, {expiresIn: "2m"})

        const refreshToken = jwt.sign({ id: existingUser[0].id }, REFRESH_TOKEN_SECRET, {expiresIn: "5m"})

        res.json({existingUser, token, refreshToken})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const refreshToken = async (req, res) => {
    res.json("Creando un nuevo access token")
}

export const logout = async (req, res) => {
    res.json("Saliendo de la sesión")
}
