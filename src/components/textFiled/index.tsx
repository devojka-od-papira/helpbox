import React from "react";
import { ErrorMessage, useField } from "formik";
import "./index.scss";

interface FieldValue {
  type: string;
  name: string;
  label: string;
  props?: any;
}

export const TextField: React.FC<FieldValue> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-wrapper">
      <label htmlFor={field.name} className="label">
        {label}
      </label>
      <input {...field} {...props} />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
