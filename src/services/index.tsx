import axios from "axios";

export const register = (values: any) => {
  return axios
    .post("http://localhost:8000/api/auth/signup", {
      email: values.email,
      password: values.password,
      repeatPassword: values.repeatPassword,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};
