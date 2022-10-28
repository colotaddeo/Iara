import { useImages } from "../hooks/useImages"

function DeletePopUp({closePopUp, patientId}) {
    const { deletePatient } = useImages()
  return (
    <div>
        <h1>Estás a punto de borrar un paciente incluyendo todo su historial de radiografías y predicciones. Esta acción es IRREVERSIBLE</h1>
        <button onClick={() => closePopUp(false)}>Cancelar operación</button>
        <button onClick={() => {
            deletePatient(patientId)
            closePopUp(false);
        }}>Continuar</button>
    </div>
  )
}

export default DeletePopUp