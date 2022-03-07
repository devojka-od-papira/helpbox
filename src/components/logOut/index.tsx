import React from "react";
import "./index.scss";

const LogOut = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="btn-wrapper">
      <button onClick={logOut} className="btn">
        Log out
      </button>
    </div>
  );
};
export default LogOut;
