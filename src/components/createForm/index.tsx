import React, { useState } from "react";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "../textFiled";
import { validationSchema } from "./validationSchema";
import "./index.scss";

interface CreateFormProps {
  onSubmit: any;
  id: string | null | undefined;
  handleUpdate: any;
}

const CreateForm: React.FC<CreateFormProps> = ({
  onSubmit,
  id,
  handleUpdate,
}) => {
  const [error, setError] = useState("");
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
            console.log("values", values);

            onSubmit(values.projectName, id)
              .then((response: any) => {
                console.log(response);
                handleUpdate(response);
              })
              .catch((error: any) => {
                console.log(error);
                setError(error.message);
              });
          }}
        >
          {({ handleSubmit }) => {
            return (
              <Form className="form" onSubmit={handleSubmit}>
                <TextField label="Name" name="projectName" type="text" />
                <button className="btn" type="submit">
                  Create
                </button>
                {error && (
                  <p className="error">
                    {error}
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                  </p>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
export default CreateForm;
