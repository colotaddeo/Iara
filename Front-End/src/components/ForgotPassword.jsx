import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useImages } from "../hooks/useImages";

const Forgot_password = () => {

    const { forgotPassword } = useImages()

    return (
        <div>
            <Formik
                initialValues={{
                    Email: "",
                }}
                validationSchema={Yup.object({
                    Email: Yup.string().required("El email es requerido"),
                })}
                onSubmit={(values, actions) => {
                    console.log(values);
                    forgotPassword(values);
                }}
            >
                {({ handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field name="Email" placeholder="Email..."></Field>
                        <ErrorMessage name="Email" />
                        <button className="cyanBtn" type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    // <div className="login-container">
    //   <div className="form-login">
    //     <h2 className="titulo__login">Inicio de sesión</h2>
    //     <p className="login_error" ref={errRef}>{errMsg}</p>
    //     <Formik
    //             initialValues={{
    //                 Email: "",
    //             }}
    //             validationSchema={Yup.object({
    //                 Email: Yup.string().required("El email es requerido"),
    //             })}
    //             onSubmit={(values, actions) => {
    //                 console.log(values);
    //                 forgotPassword(values);
    //             }}
    //         >
    //             {({ handleChange, handleSubmit }) => (
    //                 <Form onSubmit={handleSubmit}>
    //                     <Field name="Email" placeholder="Email..."></Field>
    //                     <ErrorMessage name="Email" />
    //                     <button className="cyanBtn" type="submit">Enviar</button>
    //                 </Form>
    //             )}
    //         </Formik>
    //     <div className="logo__login">
    //       <img src={Logo} />
    //       <label>IARA</label>
    //     </div>
    //   </div>
    //   <div className="imagen" id="imagen__login">
    //     <img src={Imagen} alt="Imagen" />
    //   </div>
    // </div>

    )
};

export default Forgot_password;