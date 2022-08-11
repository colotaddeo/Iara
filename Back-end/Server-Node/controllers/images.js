import { pool } from '../db.js'

//Funciones de las rutas. Esto con el objetivo de tener el código lo más organizado posible.
export const uploadImage = async (req, res) => {

    try {
        const {title, description} = req.body;
        const filename = req.file.filename;
        const path = req.file.path;

        const [result] = await pool.query("INSERT INTO paciente (titulo, descripcion, nombre_img, ruta_img) VALUES (?, ?, ?, ?)", [title, description, filename, path])

        console.log(result)

        const date = new Date().toString();

        res.json({id: result.insertId, title, description, filename, path, date})

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export const getImages = async (req, res) => {

    try {
        const [result] = await pool.query("SELECT * FROM paciente ORDER BY createdAt ASC")

        res.json(result);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getImage = async (req, res) => {

    try {
        const [result] = await pool.query("SELECT * FROM paciente WHERE id = ?", [req.params.id])

        console.log(result.length)

        if(result.length === 0){
            return res.status(404).json({message: "La imagen no fue encontrada"});
        }

        res.json(result[0])
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateImage = async (req, res) => {

    res.json("Actualizando...")
}

export const deleteImage = async (req, res) => {

    try {
        const[existingUser] = await pool.query("SELECT * FROM paciente WHERE id = ?", [req.params.id])

        const[result] = await pool.query("DELETE FROM paciente WHERE id = ?", [req.params.id])

        if(result.affectedRows === 0){
            return res.status(404).json({message: "La imagen no fue encontrada"})
        }

        return res.status(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}