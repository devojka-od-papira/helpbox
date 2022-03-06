import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Dashboard = () => {
  const projects = [
    {
      name: "Project 1",
      acountId: 1,
    },
    {
      name: "Project 2",
      acountId: 2,
    },
    {
      name: "Project 3",
      acountId: 3,
    },
    {
      name: "Project 4",
      acountId: 4,
    },
  ];
  return (
    <div className="dashboard-wrapper">
      <h1 className="logo">Help Box</h1>
      <ul>
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <FontAwesomeIcon className="icon" icon={faFolder} />
              {project.name}
            </li>
          );
        })}
      </ul>
      <div>
        <button className="btn" type="submit">
          <FontAwesomeIcon className="icon" icon={faPlus} />
          create project
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
