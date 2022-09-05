import React from "react";
import { Formik } from "formik";
import {createTaskRequest} from '../../../../api/task.api'

export const Body = () => {
  return (
    <div>
      <h1>Este es el body</h1>

      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async(values) => {
          console.log(values);
          try{
            const response = await createTaskRequest(values)
            console.log(response);
          }catch(err){
            console.error(err);
        }}}
      >
        {({ handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a new title"
              onChange={handleChange}
            />

            <br />

            <label>description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description here"
              onChange={handleChange}
            ></textarea>

            <button type="submit">Save</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Body;
