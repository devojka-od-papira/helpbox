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
export const createProjectService = (
  name: string,
  accountId: string | null
) => {
  return axios
    .post("http://localhost:8000/api/dashboard/project", {
      accountId,
      name,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};
export const getProjectChannels = (id: string | undefined) => {
  return axios
    .post("http://localhost:8000/api/dashboard/single-project", {
      projectId: id,
    })
    .then((response) => {
      return response.data.project;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
export const createChannelsList = (name: string, projectId: string) => {
  return axios
    .post("http://localhost:8000/api/dashboard/list", {
      name,
      projectId,
    })
    .then((response) => {
      console.log("serListChannel", response);
      return response.data;
    })
    .catch((error) => {
      console.log("errorChannelLIST", error);
      throw new Error(error.response.data.message);
    });
};
