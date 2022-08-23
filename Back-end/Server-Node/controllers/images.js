import { pool } from '../db.js'
//Funciones de las rutas. Esto con el objetivo de tener el código lo más organizado posible.
export const uploadImage = async (req, res) => {

    try {

        //Recibir info del front
        const {title, description} = req.body;
        const filename = req.file.filename;
        const path = req.file.path;

        //Mandar la info a python


        //Recibir la info de python


        //Mandar la info a la db
        const [result] = await pool.query("INSERT INTO radiografias (nombre_img, titulo_img, descripcion_img, ruta_img) VALUES (?, ?, ?, ?)", [filename, title, description, path])

        console.log(result)

        const date = new Date().toString();

        res.json({id: result.insertId, title, description, filename, path, date})

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export const getImages = async (req, res) => {

    try {
        const [result] = await pool.query("SELECT * FROM radiografias ORDER BY createdAt ASC")

        res.json(result);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getImage = async (req, res) => {

    try {
        const [result] = await pool.query("SELECT * FROM radiografias WHERE id = ?", [req.params.id])

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

    try {
        const {id} = req.params

        const {title, description} = req.body;

        const [existingUser] = await pool.query("SELECT * FROM radiografias WHERE id = ?", [req.params.id])

        if(existingUser.length === 0){
            return res.status(404).json({message: "El usuario no fue encontrado"});
        }

        const [result] = await pool.query("UPDATE radiografias SET titulo_img = ?, descripcion_img = ? WHERE id = ?", [title, description, id])
    
        res.json(result)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
    
   
}

export const deleteImage = async (req, res) => {

    try {
        const[result] = await pool.query("DELETE FROM radiografias WHERE id = ?", [req.params.id])

        if(result.affectedRows === 0){
            return res.status(404).json({message: "La imagen no fue encontrada"})
        }

        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getImageBySearch = async (req, res) => {
    res.json("Buscando imagen")
}

export const getFrontalImages = (req, res) => {
    res.json("Obteniendo imagenes frontales")
}

export const getProfileImages = (req, res) => {
    res.json("Obteniendo imagenes de perfil")
}