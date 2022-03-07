import React, { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard";
import Dialog from "../../components/dialog";
import CreateProject from "../../components/createProjectForm";
import { getProjects } from "../../services";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const accountId = localStorage.getItem("accountId");
    getProjects(accountId)
      .then((response) => {
        console.log("homeR", response);
        setProjects(response.projects);
      })
      .catch((error) => {
        console.log("homeError", error);
      });
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <Dialog handleDialog={setOpen}>
          <CreateProject projects={projects} setProjects={setProjects} />
        </Dialog>
      ) : null}
      <Dashboard projects={projects} handleSetOpen={setOpen} />
    </div>
  );
}
export default Home;
