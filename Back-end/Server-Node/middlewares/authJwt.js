//Middleware que nos permitirá identificar si existe un Jwt y de esta manera proteger las rutas de nuestra web
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import { pool } from "../db.js";

const authJwt = async (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token)return res.status(403).json({ message: "El token no fue recibido" });

    const decoded = jwt.verify(token, SECRET);

    req.user = decoded.id

    req.email = decoded.email

    const [result] = await pool.query("SELECT *  FROM registro WHERE id = ?", [req.user])

    if(decoded.email !== result[0].email) return res.status(404).json({message: "Hemos encontrado movimiento extraños en su cuenta"})

    next()

  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export default authJwt