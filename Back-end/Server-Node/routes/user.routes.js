import { Router } from "express";

const router = Router();


import { signUp, signIn, refreshToken, logout } from "../controllers/user.js";

//Ruta que te permite registrarte
router.post('/signup', signUp)

//Ruta que te permite iniciar sesión
router.post('/signin', signIn)

//Ruta que te permite obtener un nuevo access token
router.post('/refreshToken', refreshToken)

//Ruta que te permite eliminar el refresh token
router.delete('/logout', logout)


export default router