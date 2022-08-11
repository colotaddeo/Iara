import { pool } from '../db.js'

//Funciones de las rutas. Esto con el objetivo de tener el código lo más organizado posible.
export const uploadImage = async (req, res) => {

    try {
        const {title, description} = req.body;
        const filename = req.file.filename;
        const path = req.file.path;

        const [result] = await pool.query("INSERT INTO paciente (titulo, descripcion, nombre_img, ruta_img) VALUES (?, ?, ?, ?)", [title, description, filename, path])

        console.log(result)

        res.json({id: result.insertId, title, description, filename, path})
        return res.status(200);

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export const getImages = async (req, res) => {

    
    res.json("Obteniendo imagenes")
}

export const getImage = async (req, res) => {
    res.json("Obteniendo imagen")
}

export const updateImage = async (req, res) => {
    res.json("Actualizando imagen")
}

export const deleteImage = async (req, res) => {
    res.json("Eliminando imagen")
}