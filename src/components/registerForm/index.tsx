import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./validationScheme";
import { register } from "../../services";
import { TextField } from "../textFiled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const initialValues = {
    email: "",
    password: "",
    repeatPassword: "",
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setStatus }) => {
          register(values)
            .then((response: any) => {
              setError("");
              setStatus(response.data.message);
            })
            .catch((error) => {
              setStatus("");
              setError(error.message);
            });
        }}
      >
        {({ handleSubmit, status }) => {
          return (
            <Form className="form" onSubmit={handleSubmit}>
              <TextField label="E-mail" type="text" name="email" />
              <TextField label="Password" type="password" name="password" />
              <TextField
                label="Reapet password"
                type="password"
                name="repeatPassword"
              />
              <button type="submit" className="btn">
                Register
              </button>
              <p className="message">
                Already registered?<a href="/login"> Log in</a>
              </p>
              {status && (
                <p className="success">
                  {status}
                  <FontAwesomeIcon icon={faCheck} />
                </p>
              )}
              {error && (
                <p className="error">
                  {error}
                  <FontAwesomeIcon icon={faExclamation} />
                </p>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default RegisterForm;
