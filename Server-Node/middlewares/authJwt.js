//Middleware que nos permitirá identificar si existe un Jwt y de esta manera proteger las rutas de nuestra web
import jwt from "jsonwebtoken";
import { pool } from "../db.js";

const authJwt = async (req, res, next) => {
  try {

    const authHeader = req.headers['authorization'];

    console.log(authHeader)

    const token = authHeader && authHeader.split(' ')[1]//Si tenenmos un authHeader continúa y devolveme el token nada más

    console.log(token)

    if (token == null)return res.sendStatus(401).json({ message: "El token no fue recibido" });

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.user = decoded.id;

    const [result] = await pool.query("SELECT * FROM registro WHERE id = ?", [
      req.user,
    ]);

    if (result.length === 0)return res.status(404).json("El token no es válido");

    next();
  } catch (error) {
    console.log(error)
    return res.status(403).json({ message: "No estas autorizado"});
  }
};

export default authJwt;
