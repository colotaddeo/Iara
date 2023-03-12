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
          You are about to delete a radiography from a<br />
          patients history, this action is
          <span className="iara_cyan"> IRREVERSABLE</span>
      </p>
      
      <div className="deletePopUp_buttons">
        <button onClick={() => setOpenModel(false) } className="blandTransparantBtn">Cancel operation</button>
        <button onClick={() => {
          deleteImage(rxId, imageId)
          setOpenModel(false)
          refreshPage()
        }} className="blandBtn">Continue</button>
      </div>
    </div>
  </div>
  )
}

export default DeleteRXPopUp