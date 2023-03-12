import React, { useEffect } from "react";
import { useImages } from "../hooks/useImages";
import NoneFoundWarning from "../assets/Warning_yellow.svg";
import { useNavigate } from "react-router-dom";


function Previsualizacion( {selectedDni, images, patientId} ) {
  const navigate = useNavigate()
  // const { getImageById, images } = useImages()

  // console.log(selectedDni)

  // useEffect(() => {
  //   getImageById(selectedDni);
  // }, [])
  return (
    <div>
      {images?.length ? (
        <div className="hero_preview_image_wrapper hero_recent_preview">
          <div className="hero_ultima_prediccion">
            {images.map((image) => (
              <div key={image.id}>
                <img
                  src={image.ruta}
                  alt="Imagen con tuberculosis"
                  width={250}
                />
                <div className="ultima_prediccion_titles">
                  <h2>
                    ID: <span> {selectedDni} </span>
                  </h2>
                  <h2>
                    Last prediction 1: <span> {image.prediccion_cnn} </span>
                  </h2>
                  <h2>
                    Last prediction 2:{" "}
                    <span> {image.prediccion_transformers} </span>
                  </h2>
                  <h2 className="iara_cyan">
                    Average: <span> {image.prediccion_promedio} </span>
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/AddRadiography/" + patientId)}
            className="blandTransparantBtn"
          >
            Ver más
          </button>
        </div>
      ) : (
        <div className="hero_preview_image_wrapper recent_no_rx_found">
          <div className="no_rx_found">
            <img src={NoneFoundWarning} alt="No patients Image" />
            <h1 className="hero_empty_p">
              ID: <span className="iara_cyan">{selectedDni}</span>
            </h1>
            <p className="hero_empty_p">
              This patient doesn't have
              <br />
              radiographies to preview,
              <br />
              upload one&nbsp;
              <span
                className="hero_empty_p_cyan"
                onClick={() => navigate("/AddRadiography/" + patientId)}
              >
                here
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Previsualizacion;
