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

export const login = (values: any) => {
  return axios
    .post("http://localhost:8000/api/auth/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error.response.data.message);
    });
};
export const getProjects = (accountId: string | null) => {
  return axios
    .post("http://localhost:8000/api/dashboard/projects", {
      accountId,
    })
    .then((response) => {
      console.log("getProjects", response);
      return response.data;
    })
    .catch((error) => {
      console.log("getProjectsError", error);
    });
};
