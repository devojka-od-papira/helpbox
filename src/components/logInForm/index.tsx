import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { validationSchema } from "./validationSchema";
import { TextField } from "../textFiled";
import { login } from "../../services";
import "./index.scss";

const LogInForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <>
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            login(values)
              .then((response: any) => {
                localStorage.setItem("token", response.token);
                localStorage.setItem("accountId", response.accountId);
                console.log(response);
                navigate("/");
              })
              .catch((error) => {
                console.log(error.message);
                setError(error.message);
              });
          }}
        >
          {({ handleSubmit }) => {
            return (
              <Form className="form" onSubmit={handleSubmit}>
                <TextField label="Email" name="email" type="text" />
                <TextField label="Password" type="password" name="password" />
                <button className="btn" type="submit">
                  Log in
                </button>
                <p className="message">
                  New User? <a href="/register">Create an account</a>
                </p>
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
    </>
  );
};
export default LogInForm;
