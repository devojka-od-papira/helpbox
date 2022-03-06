import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

interface DialogProps {
  children: any;
  handleDialog: (status: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({ children, handleDialog }) => {
  return (
    <div className="dialog-wrapper">
      <FontAwesomeIcon
        size="2x"
        className="icon"
        onClick={() => handleDialog(false)}
        icon={faSquareXmark}
      />
      <div className="container">{children}</div>
    </div>
  );
};
export default Dialog;
