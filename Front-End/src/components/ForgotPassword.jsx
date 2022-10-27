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
    )
};

export default Forgot_password;