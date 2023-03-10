import { pool } from "../db.js";
import { timeConverter } from "../libs/time.Converter.js";
import fs from 'fs-extra'

export const uploadPatient = async (req, res) => {

    try {
        const { DNI } = req.body;
        const id_medico = req.user;

        const [existingPatient] = await pool.query("SELECT * FROM paciente WHERE dni = ? AND id_medico", [DNI, id_medico]);

        if (existingPatient.length !== 0) return res.status(409).json({ message: "El paciente ya existe" });

        await pool.query("INSERT INTO paciente (DNI, id_medico) VALUES (?,?)", [DNI, id_medico])

        const [InsertedPatient] = await pool.query("SELECT id, DNI, createdAt FROM paciente WHERE dni = ? AND id_medico", [DNI, id_medico]);;

        const createdAt = timeConverter(InsertedPatient[0].createdAt)

        res.json({ id: InsertedPatient[0].id, DNI: InsertedPatient[0].DNI, createdAt })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



/*export const uploadPatient = async (req, res) => {

    try {
        const {DNI, antecedentes} = req.body;
        const id_medico = req.user;

        const[existingPatient] = await pool.query("SELECT * FROM paciente WHERE dni = ? AND id_medico", [DNI, id_medico]);
        
        if(existingPatient.length !== 0) return res.status(409).json({message: "El paciente ya existe"});

        const [result] = await pool.query("INSERT INTO paciente (DNI, antecedentes, id_medico) VALUES (?,?,?)", [DNI, antecedentes, id_medico]);

        res.json({id: result.insertId, DNI, antecedentes});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}
*/


/*export const uploadPatient = async (req, res) => {

    try {
        console.log(req.file)

        const {DNI} = req.body;
        const id_medico = req.user;
        const filename = req.file.filename;
        const path = req.file.path;

        const[existingPatient] = await pool.query("SELECT * FROM paciente WHERE dni = ? AND id_medico", [DNI, id_medico]);
        
        if(existingPatient.length !== 0) return res.status(409).json({message: "El paciente ya existe"});


        if(req.file.mimetype === 'image/jpeg'){
            const response = await fetch('http://127.0.0.1:8000/predict_jpg',{
            method: 'post',
            body: JSON.stringify({path}),
            headers: {'Content-Type': 'application/json'}
            })

            const {prediction_cnn, prediction_transformers, prediction_average} = await response.json();

            console.log(prediction_cnn)
            console.log(prediction_transformers)
            console.log(prediction_average)

            const [insertedPatient] = await pool.query("INSERT INTO paciente (DNI, id_medico) VALUES (?,?)", [DNI, id_medico]);

            console.log(insertedPatient.insertId)
            
            const id_paciente = insertedPatient.insertId

            const [insertedRadiography] = await pool.query("INSERT INTO radiografias (nombre, ruta, prediccion_cnn, prediccion_transformers, prediccion_promedio, id_Paciente) VALUES (?, ?, ?, ?, ?, ?)", [filename, path, prediction_cnn, prediction_transformers, prediction_average, id_paciente]);

            const id_radiografia = insertedRadiography.insertId

            const [createdAt] = await pool.query("SELECT createdAt from radiografias WHERE id = ?", [id_radiografia])

            console.log(createdAt[0].createdAt)

            const TimeConverted = timeConverter(createdAt[0].createdAt)

            return res.status(201).json({id_paciente, DNI, path, prediction_cnn, prediction_transformers, prediction_average, TimeConverted})
        }

        const response = await fetch('http://127.0.0.1:8000/predict_dicom',{
            method: 'post',
            body: JSON.stringify({path}),
            headers: {'Content-Type': 'application/json'}
        })

        await fs.remove(path)

        const {prediction_cnn, prediction_transformers, prediction_average, new_path} = await response.json();

        console.log(prediction_cnn)
        console.log(prediction_transformers)
        console.log(prediction_average)
        console.log(new_path)

        const [insertedPatient] = await pool.query("INSERT INTO paciente (DNI, id_medico) VALUES (?,?)", [DNI, id_medico]);

        console.log(insertedPatient.insertId)
            
        const id_paciente = insertedPatient.insertId
        
        await pool.query("INSERT INTO radiografias (nombre, ruta, prediccion_cnn, prediccion_transformers, prediccion_promedio, id_Paciente) VALUES (?, ?, ?, ?, ?, ?)", [filename, path, prediction_cnn, prediction_transformers, prediction_average, id_paciente]);

        res.status(201).json({id_paciente, DNI, id_medico, path, prediction_cnn, prediction_transformers, prediction_average})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message});
    }
}
*/

export const getPatients = async (req, res) => {

    try {
        const id_medico = req.user;

        const [allPatients] = await pool.query("SELECT id, DNI, createdAt FROM paciente WHERE id_medico = ? ORDER BY createdAt DESC", [id_medico]);

        console.log(allPatients)

        allPatients.map((paciente) => paciente.createdAt = timeConverter(paciente.createdAt))

        res.json(allPatients)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}


/*export const getPatient = async (req, res) => {
    try {
        const id_medico = req.user;

        const {id} = req.params;

        const [result] = await pool.query("SELECT id, DNI FROM paciente WHERE id_medico = ? AND id = ?", [id_medico, id]);

        console.log(result.length);

        if(result.length === 0){
            return res.status(404).json({message: "El paciente no fue encontrado"});
        };

        res.json(result[0]);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
*/

export const getPatient = async (req, res) => {
    try {
        const id_medico = req.user;

        const { id } = req.params;

        const [result] = await pool.query("SELECT id, DNI, createdAt FROM paciente WHERE id_medico = ? AND id = ?", [id_medico, id]);

        console.log(result.length);

        if (result.length === 0) {
            return res.status(404).json({ message: "El paciente no fue encontrado" });
        };

        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/*export const updatePatient = async (req, res) => {

    try {
        const {id} = req.params

        const {DNI, antecedentes} = req.body

        const id_medico = req.user

        const [existingPatient] = await pool.query("SELECT * FROM paciente WHERE id_medico = ? AND id = ?", [id_medico, id])

        console.log(existingPatient)

        if(existingPatient.length === 0) return res.status(404).json({message: "El usuario no fue encontrado"});

        await pool.query("UPDATE paciente SET DNI = ?, antecedentes = ? WHERE id_medico = ? AND id = ?", [DNI, antecedentes, id_medico, id])

        res.status(201).json({message: "El paciente ha sido actualizado con éxito"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
*/

export const updatePatient = async (req, res) => {

    try {
        const { id } = req.params

        const { DNI } = req.body

        const id_medico = req.user

        const [existingPatient] = await pool.query("SELECT * FROM paciente WHERE id_medico = ? AND id = ?", [id_medico, id])

        console.log(existingPatient)

        if (existingPatient.length === 0) return res.status(404).json({ message: "El usuario no fue encontrado" });

        await pool.query("UPDATE paciente SET DNI = ? WHERE id_medico = ? AND id = ?", [DNI, id_medico, id])

        res.status(201).json({ message: "El paciente ha sido actualizado con éxito" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deletePatient = async (req, res) => {
    try {
        const { id } = req.params

        console.log(id)

        const id_medico = req.user

        console.log(id_medico)

        const [existingImage] = await pool.query("SELECT * FROM radiografias WHERE id_paciente = ?", [id])

        console.log(existingImage)

        if(existingImage.length === 0){
            
            const [result] = await pool.query("DELETE FROM paciente WHERE id_medico = ? AND id = ?", [id_medico, id])

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "El paciente no fue encontrado" })
            }

            return res.sendStatus(204)
        }

        const deletePatientInfo = await Promise.all([
            pool.query("DELETE FROM paciente WHERE id_medico = ? AND id = ?", [id_medico, id]),
            pool.query("DELETE FROM radiografias WHERE id_Paciente = ?", [id])
        ])

        console.log(deletePatientInfo)

        return res.sendStatus(204)


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


/*export const deletePatient = async (req, res) => {
    try {
        const {id} = req.params

        const id_medico = req.user

        const [existingImage] = await pool.query("SELECT ruta FROM radiografias WHERE id_Paciente = ?", [id])

        console.log(existingImage[0].ruta)
        await fs.remove(existingImage[0].ruta.toString())

        const [result] = await Promise.all([
            pool.query("DELETE FROM paciente WHERE id_medico = ? AND id = ?", [id_medico, id]),
            pool.query("DELETE FROM radiografias WHERE id_Paciente = ?", [id])
        ]) 

        if(result.affectedRows === 0){
            return res.status(404).json({message: "El paciente no fue encontrado"})
        }

        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}
*/


export const getPatientBySearch = async (req, res) => {

    try {
        const { DNI } = req.query;

        const id_medico = req.user
        console.log(id_medico);

        const [patientsSearched] = await pool.query("SELECT id, DNI, createdAt FROM paciente WHERE id_medico = ? AND DNI LIKE CONCAT (?, '%')", [id_medico, DNI]);

        patientsSearched.map((patientSearched) => patientSearched.createdAt = timeConverter(patientSearched.createdAt));

        res.json(patientsSearched);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getPatientUploadedRecently = async (req, res) => {

    try {
        const id_medico = req.user

        console.log(id_medico)

        const [pacientesRecientes] = await pool.query("SELECT id, DNI, createdAt FROM paciente WHERE id_medico = ? ORDER BY createdAt DESC LIMIT 7", [id_medico])

        pacientesRecientes.map((paciente) => paciente.createdAt = timeConverter(paciente.createdAt))

        res.json(pacientesRecientes)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}