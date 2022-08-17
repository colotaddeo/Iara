import { pool } from "../db.js"

export const uploadPatient = async (req, res) => {

    try {
        const {DNI, firstName, lastName} = req.body

        const[existingPatient] = await pool.query("SELECT * FROM paciente WHERE dni = ?", [DNI])
        
        if(existingPatient.length !== 0) return res.status(404).json({message: "El paciente ya existe"})

        const [result] = await pool.query("INSERT INTO paciente (DNI, nombre, apellido) VALUES (?,?,?)", [DNI, firstName, lastName])

        const date = new Date().toString();

        res.json({id: result.insertId, DNI, firstName, lastName, date})
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const getPatients = async (req, res) => {
    
    try {
        const [result] = await pool.query("SELECT * FROM paciente ORDER BY createdAt ASC")

        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
    
}

export const getPatient = async (req, res) => {
    try {
        const {id} = req.params

        const [result] = await pool.query("SELECT * FROM paciente WHERE id = ?", [id])

        console.log(result.length)

        if(result.length === 0){
            return res.status(404).json({message: "El paciente no fue encontrado"});
        }

        res.json(result[0])
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updatePatient = async (req, res) => {

    try {
        const {id} = req.params

        const {DNI, firstName, lastName} = req.body

        const [existingPatient] = await pool.query("SELECT * FROM paciente WHERE id = ?", [id])

        if(existingPatient.length === 0) return res.status(404).json({message: "El usuario no fue encontrado"});

        const [result] = await pool.query("UPDATE paciente SET DNI = ?, nombre = ?, apellido = ? WHERE id = ?", [DNI, firstName, lastName, id])

        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deletePatient = async (req, res) => {
    try {
        const {id} = req.params

        const[result] = await pool.query("DELETE FROM paciente WHERE id = ?", [id])

        if(result.affectedRows === 0){
            return res.status(404).json({message: "El usuario no fue encontrado"})
        }

        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}