
export const signUp = async (req, res) => {
    res.json("Registrandose")
}

export const signIn = async (req, res) => {
    res.json("Iniciando sesión")
}

export const refreshToken = async (req, res) => {
    res.json("Creando un nuevo access token")
}

export const logout = async (req, res) => {
    res.json("Saliendo de la sesión")
}
