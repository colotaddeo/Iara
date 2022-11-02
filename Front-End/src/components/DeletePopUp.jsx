import { useImages } from "../hooks/useImages"
import "../components/AllPatients.css"

function DeletePopUp({setOpenModel, patientId, DeleteWarning}) {
    const { deletePatient } = useImages()
    const refreshPage = ()=>{
      window.location.reload();
   }
  return (
    <div>
    <div className="blur-backdrop" onClick={() => setOpenModel(false) }></div>
    <div className="deletePopUp">
      <img src={DeleteWarning} alt="DeleteWarning" />
      <p>Estás a punto de borrar un paciente incluyendo todo <br />
        su historial de radiografías y predicciones. Esta acción <br />
        es <span className="iara_cyan"> IRREVERSIBLE</span>
      </p>
      
      <div className="deletePopUp_buttons">
        <button onClick={() => setOpenModel(false) } className="blandTransparantBtn">Cancelar operación</button>
        <button onClick={() => {
          deletePatient(patientId)
          setOpenModel(false)
          refreshPage()
        }} className="blandBtn">Continuar</button>
      </div>
    </div>
  </div>
  )
}

export default DeletePopUp