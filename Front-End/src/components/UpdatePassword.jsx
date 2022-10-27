import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useImages } from "../hooks/useImages";

function UpdatePassword() {

    const { updatePassword } = useImages()

    return (
        <div>
            <h1>Recupera tu contraseña</h1>
            <Formik
                initialValues={{
                    Password: "",
                    ConfirmPassword: "",
                }}
                validationSchema={Yup.object({
                    Password: Yup.string().required("La contraseña es requerido"),
                    ConfirmPassword: Yup.string().required("Debes confirmar la contraseña"),
                })}
                onSubmit={(values, actions) => {
                    console.log(values);
                    updatePassword(values);
                }}
            >
                {({ handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field name="Password" placeholder="Password..."></Field>
                        <ErrorMessage name="Password" />

                        <Field name="ConfirmPassword" placeholder="ConfirmPassword..."></Field>
                        <ErrorMessage name="ConfirmPassword" />
                        <button className="cyanBtn" type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UpdatePassword