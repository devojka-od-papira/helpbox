import React, { useState } from "react";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "../textFiled";
import { validationSchema } from "./validationSchema";
import { createProjectService } from "../../services";
import "./index.scss";

interface CreateProjectProps {
  setProjects: (projects: any) => void;
  projects: any;
}

const CreateProject: React.FC<CreateProjectProps> = ({
  setProjects,
  projects,
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
            const accountId = localStorage.getItem("accountId");
            console.log("values", values);
            createProjectService(values.projectName, accountId)
              .then((response) => {
                console.log(response);
                setProjects([...projects, response.project]);
              })
              .catch((error) => {
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
export default CreateProject;
