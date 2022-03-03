import React from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./validationSchema";
import "./index.scss";

const LogInForm = () => {
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
          onSubmit={(values) => {}}
        >
          {({ values, handleSubmit, handleChange }) => {
            return (
              <Form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  value={values.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />

                <button className="btn" type="submit">
                  Log in
                </button>
                <p className="message">
                  New User? <a href="/register">Create an account</a>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
export default LogInForm;
