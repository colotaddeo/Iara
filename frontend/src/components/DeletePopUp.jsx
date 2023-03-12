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
      <p>You are about to permanently delete a patient, <br />
        this includes their complete upload history
      </p>
      
      <div className="deletePopUp_buttons">
        <button onClick={() => setOpenModel(false) } className="blandTransparantBtn">Cancel operation</button>
        <button onClick={() => {
          deletePatient(patientId)
          setOpenModel(false)
          refreshPage()
        }} className="blandBtn">Continue</button>
      </div>
    </div>
  </div>
  )
}

export default DeletePopUp