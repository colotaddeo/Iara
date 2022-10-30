import { useImages } from "../hooks/useImages"

function DeletePopUp() {
    const { deletePatient } = useImages()
  return (
    <div>
    <div className="deletePopUp">
      <img src={DeleteWarning} alt="DeleteWarning" />
      <p>Estás a punto de borrar un paciente incluyendo todo <br />
        su historial de radiografías y predicciones. Esta acción <br />
        es <span className="iara_cyan"> IRREVERSIBLE</span></p>
      
      <div className="deletePopUp_buttons">
        <button onClick={() => setOpenModel(false) } className="blandTransparantBtn">Cancelar operación</button>
        <button onClick={() => {
          deletePatient(patientId)
          setOpenModel(false);
        }} className="blandBtn">Continuar</button>
      </div>
    </div>
  </div>
  )
}

export default DeletePopUp