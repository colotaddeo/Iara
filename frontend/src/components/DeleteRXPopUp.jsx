import { useImages } from "../hooks/useImages"
import "../components/AllPatients.css"

function DeleteRXPopUp({setOpenModel, rxId, imageId, DeleteWarning}) {
    const { deleteImage } = useImages()
    const refreshPage = ()=>{
      window.location.reload();
   }
  return (
    <div>
    <div className="deletePopUp">
      <img src={DeleteWarning} alt="DeleteWarning" />
      <p>
          Estas a punto de eliminar una radiografía del historial<br />
          de un paciente. Esta acción es
          <span className="iara_cyan"> IRREVERSIBLE</span>
      </p>
      
      <div className="deletePopUp_buttons">
        <button onClick={() => setOpenModel(false) } className="blandTransparantBtn">Cancelar operación</button>
        <button onClick={() => {
          deleteImage(rxId, imageId)
          setOpenModel(false)
          refreshPage()
        }} className="blandBtn">Continuar</button>
      </div>
    </div>
  </div>
  )
}

export default DeleteRXPopUp