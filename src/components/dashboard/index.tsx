import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

interface DashboardProps {
  handleSetOpen: any;
  projects: any;
}

const Dashboard: React.FC<DashboardProps> = ({ handleSetOpen, projects }) => {
  return (
    <div className="dashboard-wrapper">
      <h1 className="logo">Help Box</h1>
      <ul>
        {projects.map((project: any, index: number) => {
          return (
            <li key={index}>
              <FontAwesomeIcon className="icon" icon={faFolder} />
              {project.name}
            </li>
          );
        })}
      </ul>
      <div>
        <button
          className="btn"
          type="submit"
          onClick={() => handleSetOpen(true)}
        >
          <FontAwesomeIcon className="icon" icon={faPlus} />
          create project
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
