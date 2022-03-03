import React from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./validationScheme";
import "./index.scss";

const RegisterForm = () => {
  const initialValues = {
    email: "",
    password: "",
    repeatPassword: "",
  };

  const handleClick = () => {
    console.log("click1");
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("registerValues", values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          errors,
          handleBlur,
          touched,
        }) => {
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
              <input
                type="text"
                name="repeatPassword"
                placeholder="Repeat password"
                value={values.repeatPassword}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn"
                onClick={() => handleSubmit()}
              >
                Register
              </button>
              <p className="message">
                Already registered?<a href="/login"> Log in</a>
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default RegisterForm;
