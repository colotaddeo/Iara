import bcrypt from 'bcryptjs'
import { pool } from '../db.js'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'
import fetch from 'node-fetch';
import { SendVerificationEmailWithGmail } from '../libs/send.Email.js'


export const signUp = async (req, res) => {

    try {
        console.log(req.body)

        const { firstName, lastName, email, password, confirmPassword, doctorId, HospitalEmail } = req.body

        console.log(password)

        const [existingUser] = await pool.query("SELECT * FROM registro WHERE email = ?", [email])

        const [existingHospital] = await pool.query("SELECT * FROM hospitales WHERE email = ?", [HospitalEmail])

        if(existingUser.length !== 0 && existingHospital.length !== 0) return res.status(409).json({ message: "El usuario ya existe" });

        let hashedPassword;

        let id_hospitales;

        if(existingHospital.length !== 0 && existingUser.length === 0){

            if(password !== confirmPassword) return res.status(401).json({ message: "Las contraseñas no son iguales" });

            const salt = await bcrypt.genSalt(12);
                    
            hashedPassword = await bcrypt.hash(password, salt)
            
            id_hospitales = existingHospital[0].id

            // SendVerificationEmailWithGmail(HospitalEmail).then(sentEmail => console.log('Email sent...', sentEmail)).catch(error => console.log(error.message))

            
            //Es poco usual pero es que sino me la complico más 
            //const response = await fetch('ruta del front')

            //const {roles} = await response.json();

            const roles = "Usuario_Verificado"

            const [saveUser] = await pool.query("INSERT INTO registro (nombre, apellido, email, contrasenia, matricula, roles , id_Hospital) VALUES (?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, email, hashedPassword, doctorId, roles, id_hospitales])

            console.log(saveUser.insertId)

            //await pool.query("INSERT INTO registro (nombre, apellido, email, contrasenia, matricula, id_Hospital) VALUES (?, ?, ?, ?, ?, ?)", [firstName, lastName, email, hashedPassword, doctorId, id_hospitales])
            
            return res.status(201).json({id: saveUser.insertId, message: "Nos estamos contactando con el hospital el cual corresponde el usuario con el objetivo de verificar su integridad" })
        }

        if(password !== confirmPassword) return res.status(401).json({ message: "Las contraseñas no son iguales" });

        const salt = await bcrypt.genSalt(12);

        hashedPassword = await bcrypt.hash(password, salt)

        await pool.query("INSERT INTO hospitales (email) VALUES (?)", [HospitalEmail])

        const [HospitalInserted] = await pool.query("SELECT * FROM hospitales WHERE email = ?", [HospitalEmail])

        id_hospitales = HospitalInserted[0].id

        // SendVerificationEmailWithGmail(HospitalEmail).then(sentEmail => console.log('Email sent...', sentEmail)).catch(error => console.log(error.message))
        
        //Es poco usual pero es que sino me la complico más 
        //const response = await fetch('ruta del front')

        //const {roles} = await response.json();

        //await pool.query("INSERT INTO registro (nombre, apellido, email, contrasenia, matricula, roles , id_Hospital) VALUES (?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, email, hashedPassword, doctorId, roles, id_hospitales])
        
        const roles = "Usuario_Verificado"

        const [saveUser] = await pool.query("INSERT INTO registro (nombre, apellido, email, contrasenia, matricula, roles, id_Hospital) VALUES (?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, email, hashedPassword, doctorId, roles, id_hospitales])
        
        res.status(201).json({id: saveUser.insertId, message: "Nos estamos contactando con el hospital el cual corresponde el usuario con el objetivo de verificar su integridad" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }

}

export const signIn = async (req, res) => {

    try {
        const { email, password } = req.body

        console.log(req.body)

        const [existingUser] = await pool.query("SELECT * FROM registro WHERE email = ?", [email])

        if (existingUser.length === 0) return res.status(404).json({ message: "El usuario no existe" })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser[0].contrasenia)

        console.log(isPasswordCorrect)

        if (!isPasswordCorrect) return res.status(401).json({ message: "La contraseña es inválida" })

        const accessToken = jwt.sign({ id: existingUser[0].id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "2m" })

        const refreshToken = jwt.sign({ id: existingUser[0].id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" })

        console.log(accessToken)

        console.log(refreshToken)

        
        /*const serializeAccessToken = serialize('AccessToken', accessToken, {
            httpOnly: true,
            expiresIn: 0,
            path: '/'
        })



        const serializeRefreshToken = serialize('RefreshToken', refreshToken, {
            httpOnly: true,
            expiresIn: 0,
            path: '/'
        })

        res.setHeader('Set-Cookie', [serializeAccessToken, serializeRefreshToken]).json({ message: "El usuario se ha logueado con éxito" })
        */
        

        /*const serializeRefreshToken = serialize('RefreshToken', refreshToken, {
            httpOnly: true,
            expiresIn: 0,
            path: '/',
            sameSite: 'none',
            secure: true
        })
        */

        const serializeRefreshToken = serialize('RefreshToken', refreshToken, {
            httpOnly: true,
            expiresIn: 0,
            path: '/'
        })

        res.setHeader('Set-Cookie', serializeRefreshToken).json({ accessToken })
        


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const refreshToken = async (req, res) => {

    try {

        console.log(req.cookies)

        const refreshToken = req.cookies.RefreshToken;

        //console.log(refreshToken)

        if (!refreshToken) return res.status(403).json({message: "El usuario no está auntenticado"})

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        console.log(decoded)

        const [existingUser] = await pool.query("SELECT * FROM registro WHERE id = ?", [decoded.id])

        if (existingUser.length === 0) return res.status(403).json({message: "El token no es válido"})

        const accessToken = jwt.sign({ id: existingUser[0].id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10s" })

        /*const serializeAccessToken = serialize('AccessToken', accessToken, {
            httpOnly: true,
            expiresIn: 0,
            path: '/'
        })

        res.setHeader('Set-Cookie', serializeAccessToken).json({ message: "El nuevo access token ha sido creado correctamente" })
        */
        

        res.json({ accessToken })

    } catch (error) {
        const serializedRefreshToken = serialize('RefreshToken', null, {
            maxAge: 0,
            path: '/'
        })
        res.status(403).setHeader('Set-Cookie', serializedRefreshToken).json({ message: "No estas autenticado" })

    }
}

export const logout = async (req, res) => {

    try {
        /*const serializedAccessToken = serialize('AccessToken', null, {
            maxAge: 0,
            path: '/'
        })
    
    
        const serializedRefreshToken = serialize('RefreshToken', null, {
            maxAge: 0,
            path: '/'
        })
    
        res.status(204).setHeader('Set-Cookie', [serializedAccessToken, serializedRefreshToken]).json({message: "Se ha deslogueado correctamente"})
        */

        const serializedRefreshToken = serialize('RefreshToken', null, {
            maxAge: 0,
            path: '/'
        })

        res.status(204).setHeader('Set-Cookie', serializedRefreshToken).json({message: "Se ha deslogueado correctamente"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const forgotPassword = async (req, res) => {

    try {
        const { Email } = req.body

        console.log(req.body)

        const [existingEmail] = await pool.query("SELECT * FROM registro WHERE email = ?", [Email])

        const userId = existingEmail[0].id
        
        if (existingEmail.length === 0) return res.status(404).json({ message: "El email no existe" });

        SendVerificationEmailWithGmail(Email, userId)

        res.status(201).json({
            message: "Ya hemos enviado un mail al email ingresado"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updatePassword = async (req, res) => {
    try {
        console.log(req.body)
        const { Password, ConfirmPassword } = req.body
        const { id } = req.params

        console.log(Password, ConfirmPassword)

        if(Password !== ConfirmPassword) return res.status(401).json({ message: "Las contraseñas no son iguales" });

        const hashedPassword = await bcrypt.hash(Password, 12)

        await pool.query("UPDATE registro SET contrasenia = ? WHERE id = ?", [hashedPassword, id])

        res.status(201).json({message: "La contraseña ha sido actualizada con éxito"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const editUser = async (req, res) => {
    try {
        const { firstName, lastName, doctorId } = req.body

        const profileImagePath = req.file.path
    
        const [existingUser] = await pool.query("SELECT * FROM registro WHERE matricula = ?", [doctorId])

        if(existingUser.length === 0) return res.status(404).json({message: "El usuario no fue encontrado"})

        console.log(existingUser)
    
        const UserId = existingUser[0].id
    
        await pool.query("UPDATE registro SET nombre = ?, apellido = ?, matricula = ?, ruta = ? WHERE id = ?", [firstName, lastName, doctorId, profileImagePath, UserId])
    
        res.status(201).json({message: "El perfil ha sido actualizado con éxito"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const userInfo = async (req, res) => {
    try {
        const id_medico = req.user

        const [DoctorInfo] = await pool.query("SELECT registro.id, registro.nombre, registro.apellido, hospitales.email FROM registro INNER JOIN hospitales ON hospitales.id = registro.id_Hospital WHERE registro.id = ?", [id_medico])

        res.json(DoctorInfo)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}