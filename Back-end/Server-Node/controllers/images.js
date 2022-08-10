

//Funciones de las rutas. Esto con el objetivo de tener el código lo más organizado posible.
export const uploadImage = async (req, res) => {
    res.json("Subiendo imagen")
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