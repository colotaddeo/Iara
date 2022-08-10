

//Funciones de las rutas. Esto con el objetivo de tener el código lo más organizado posible.
export const uploadImage = async (req, res) => {

    try {
        const {title, description} = req.body;
        const size = req.file.size
        const filename = req.file.filename
        const mimetype = req.file.mimetype
        const path = req.file.path

        

        res.json({title, description, size, filename, mimetype, path})
        return res.status(200);

    } catch (error) {
        return res.status(500).json({message: message.error})
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