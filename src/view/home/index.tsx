import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../../components/dashboard";
import Dialog from "../../components/dialog";
import LogOut from "../../components/logOut";
import Board from "../../components/boards";
import {
  getProjects,
  getProjectChannels,
  createProjectService,
  createChannelsList,
} from "../../services";
import CreateForm from "../../components/createForm";

function Home() {
  const { id } = useParams();
  const accountId = localStorage.getItem("accountId");
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]) as any;
  const [channels, setChannels] = useState([]) as any;

  useEffect(() => {
    const accountId = localStorage.getItem("accountId");
    getProjects(accountId)
      .then((response) => {
        setProjects(response.projects);
      })
      .catch((error) => {
        console.log("error", error);
      });

    getProjectChannels(id)
      .then((response) => {
        setChannels(response.lists);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleUpdateProjects = (project: any) => {
    setProjects([...projects, project.project]);
  };

  const handleUpdateChannels = (channel: any) => {
    console.log("updateChannel", channel);
    setChannels([...channels, channel.list]);
  };
  console.log(channels);

  return (
    <div>
      {open ? (
        <Dialog handleDialog={setOpen}>
          <CreateForm
            onSubmit={createProjectService}
            id={accountId}
            handleUpdate={handleUpdateProjects}
          />
        </Dialog>
      ) : null}
      <div style={{ display: "flex" }}>
        <Dashboard projects={projects} handleSetOpen={setOpen} />
        <div style={{ position: "absolute", top: "0px", right: "0px" }}>
          <LogOut />
        </div>
        <div className="board">
          <Board
            id={id}
            handleUpdate={handleUpdateChannels}
            onSubmit={createChannelsList}
            channels={channels}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
