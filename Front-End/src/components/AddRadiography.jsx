import { useEffect, useState, useRef } from "react";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useImages } from "../hooks/useImages";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import "./addRadiography.css";
import DeleteWarning from "./pages/HomeTest/images/Warning_alert.svg"
import LoadingIcon from "../assets/loading-icon.gif"

const AddRadiography = () => {
  const [active_rx, setActive_rx] = useState("");

  const {
    loadImages,
    images,
    deleteImage,
    uploadImage,
    getPatient,
    patients,
    getUserInfo,
    doctors,
  } = useImages();
  const navigate = useNavigate();
  const { id } = useParams();
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [openloading, setOpenloading] = useState(false);
  const [imgLength, setImgLength] = useState([]);
  
  let i = 0;
  useEffect(() => {
    loadImages(id);
    getPatient(id);
    getUserInfo();
  }, []);

  const filename_ref = useRef("");

  console.log(images);

  if (images.length === 0)
    return (
      <div className="main_container">
        <Navbar active={active} current="Pacientes" />
        <div className="primary_container">
          <div
            className="banner"
            onClick={(e) => {
              setActive(!active);
            }}
          >
            {doctors.map((doctor) => (
              <div>
                <h1>Hola Dr/a. {doctor.apellido}</h1>
                <p>Nuestra mision es ayudarte</p>
              </div>
            ))}
          </div>
          <div className="hero_container">
            <div className="container_patient_title">
              <h1> Paciente: {patients.DNI} </h1>
            </div>
            
            <div className="hero__upload_container hero__upload_container_empty ">
              <Formik
                initialValues={{
                  file: null,
                }}
                onSubmit={(values, actions) => {
                  console.log(values);
                  uploadImage(id, values);
                  setIndex(images.length);
                  setOpenloading(true);
                  setImgLength(images.length);
                  console.log(images.length);
                  console.log("images", images);
                }}
              >
                {({ handleChange, handleSubmit, setFieldValue }) => (
                  <Form className="file_upload_form" onSubmit={handleSubmit}>
                    <div className="file_upload">
                      <input
                        className="file_upload_input files"
                        type="file"
                        name="file"
                        ref={filename_ref}
                        onChange={(e) =>
                          setFieldValue("file", e.target.files[0])
                        }
                      />
                      <div
                        onClick={() => filename_ref.current.click()}
                        className="input-text"
                      >
                        <span>
                          {filename_ref.current.value === ""
                            ? "Seleccionar archivo"
                            : filename_ref.current.value}
                        </span>
                      </div>
                    </div>
                    <button className="cyanBtn" type="submit">
                      Subir radiografia
                    </button>
                </Form>
                )}
              </Formik>

              {
                  openloading && images.length === imgLength && 
                  <div>
                    <div className="blur-backdrop"></div>
                    <div>
                      <img 
                        className="upload-loading-icon" 
                        src={LoadingIcon} 
                        alt="loading"
                        width={200}/>
                    </div>
                  </div>
                }

              <p className="hero_empty_p">
                No hay imágenes registradas, <br />
                si las hubiesen aparecerían aquí
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="main_container">
      <Navbar active={active} current="Pacientes" />

      <div className="primary_container">
        <div
          className="banner"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <h1>Hola Dr/a. {doctor.apellido}</h1>
              <p>Nuestra mision es ayudarte</p>
            </div>
          ))}
        </div>
        <div className="hero_container">
          <div className="hero__upload_rx_container">
            <div className="all_radiografias">
              <div className="container_patient_title">
                <h1> Historial </h1>
              </div>
              <div className="radiografias">
                {images?.map((image) => {
                  i += 1;
                  return (
                    <div
                      className={["hero_upload_rx_preview", active_rx].join(
                        " "
                      )}
                      key={image.id}
                      id="rx_id"
                      onClick={() => setActive_rx("active-rx")}
                    >
                      <img
                        src={image.ruta}
                        id={i}
                        onClick={(e) => {
                          setIndex(e.target.id - 1);
                          console.log(e.target.id - 1);
                        }}
                        alt="side images"
                        width={300}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hero_container_left">
              <div className="container_patient_title">
                <h1> Paciente: {patients.DNI} </h1>
              </div>
              <div className="hero__upload_container">
                <Formik
                  initialValues={{
                    file: null,
                  }}
                  onSubmit={(values, actions) => {
                    console.log(values);
                    uploadImage(id, values, setIndex);
                    setOpenloading(true);
                    setImgLength(images.length);
                  }}
                >
                  {({ handleChange, handleSubmit, setFieldValue }) => (
                    <Form className="file_upload_form" onSubmit={handleSubmit}>
                      <div className="file_upload">
                        <input
                          className="file_upload_input files"
                          type="file"
                          name="file"
                          ref={filename_ref}
                          onChange={(e) =>
                            setFieldValue("file", e.target.files[0])
                          }
                        />
                        <div
                          onClick={() => filename_ref.current.click()}
                          className="input-text"
                        >
                          <span>
                            {filename_ref.current.value === ""
                              ? "Seleccionar archivo"
                              : filename_ref.current.value}
                          </span>
                        </div>
                      </div>
                      <button className="cyanBtn" type="submit">
                        Subir radiografia
                      </button>
                    </Form>
                  )}
                </Formik>
                
                {
                  openloading && images.length === imgLength && 
                  <div>
                    <div className="blur-backdrop"></div>
                    <div>
                      <img 
                        className="upload-loading-icon" 
                        src={LoadingIcon} 
                        alt="loading"
                        width={200}/>
                    </div>
                  </div>
                }


                <div key={images[index]?.id} className="image_wrapper">
                  <div className="image_wrapper_items">
                    <div className="image_wrapper_predictions">
                      <h3>
                        Predicción 1: <br />
                        <span className="image_wrapper_pred_num">
                          {images[index]?.prediccion_cnn}
                        </span>
                      </h3>
                      <h3>
                        Predicción 2: <br />
                        <span className="image_wrapper_pred_num">
                          {images[index]?.prediccion_transformers}
                        </span>
                      </h3>
                      <h3 className="iara_cyan">
                        Porcentaje final: <br />
                        <span className="image_wrapper_pred_num">
                          {images[index]?.prediccion_promedio}
                        </span>
                      </h3>
                    </div>
                    <DeleteIcon
                      onClick={() => {
                        setOpenModel(true);
                        setOpenloading(false);
                      }}
                      className="btn_delete"
                    >
                      Delete
                    </DeleteIcon>
                  </div>
                  <div className="image_wrapper_image">
                    <img
                      src={images[index]?.ruta}
                      alt="Imagen con tuberculosis"
                      width={400}
                    />
                  </div>
                  <div>
                    {openModel &&
                    <div>
                    <div className="blur-backdrop"></div>
                    <div className="deletePopUp">
                      <img src={DeleteWarning} alt="DeleteWarning" />
                      <p>
                        Estas a punto de eliminar una radiografía del historial<br />
                        de un paciente. Esta acción es Irreversible
                      </p>
                      
                      <div className="deletePopUp_buttons">
                        <button onClick={() => setOpenModel(false) } className="blandTransparantBtn">Cancelar operación</button>
                        <button onClick={() => {
                          deleteImage(id, images[index].id);
                          if (index != 0) setIndex(index - 1);
                          setOpenModel(false);
                        }} className="blandBtn">Continuar</button>
                      </div>
                    </div>
                  </div>
                    }
                  </div>
                </div>
                <footer className="footer__uploadRX">
                  <p>
                    Recuerda que esto NO es un diagnóstico, es solo una
                    herramienta que <br />
                    esperamos sirva para diagnosticar.
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRadiography;
