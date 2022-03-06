import React, { useState } from "react";
import Dashboard from "../../components/dashboard";
import Dialog from "../../components/dialog";
import CreateProject from "../../components/createProjectForm";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <Dialog handleDialog={setOpen}>
          <CreateProject />
        </Dialog>
      ) : null}
      <Dashboard handleSetOpen={setOpen} />
    </div>
  );
}
export default Home;
