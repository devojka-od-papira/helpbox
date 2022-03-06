import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "../textFiled";

import { validationSchema } from "./validationSchema";

const CreateProject = () => {
  const initialValues = {
    projectName: "",
  };
  return (
    <>
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit }) => {
            return (
              <Form className="form" onSubmit={handleSubmit}>
                <TextField label="Name" name="projectName" type="text" />
                <button className="btn" type="submit">
                  Create
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
export default CreateProject;
