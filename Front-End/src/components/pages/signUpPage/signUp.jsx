import React from 'react'
import { Formik } from "formik";

export const SignUp = () => {
  return (
    <div>
        <h1>ESTE ES EL SIGN UP holuuuuuuuuuuu</h1>

        <div className='form'>

        <Formik>
          <input type="text" name="sdsd" id="erer" placeholder='hola nena' autoFocus/>
          <input type="text" name="sdfsdf" id="df" placeholder='hola nene'/>
        </Formik>
        
        </div>

    </div>
  )
}

export default SignUp;