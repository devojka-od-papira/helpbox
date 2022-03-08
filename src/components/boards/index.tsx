import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import Dialog from "./../dialog";
import CreateForm from "./../createForm";
import "./index.scss";

interface BoardProps {
  channels: any;
  handleUpdate: any;
  onSubmit: any;
  id: string | undefined;
}

const Board: React.FC<BoardProps> = ({
  channels,
  handleUpdate,
  onSubmit,
  id,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="board-wrapper">
      {channels.map((channel: any, index: number) => {
        console.log(channel);
        return (
          <div className="channel-item">
            <div className="channel-title" key={index}>
              {channel.name}
            </div>
            {channel.tasks.map((task: any, index: number) => {
              return <div key={index}>{task}</div>;
            })}
          </div>
        );
      })}
      <div>
        <div>
          <button className="btn" type="submit" onClick={() => setOpen(true)}>
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </button>
          {open ? (
            <Dialog handleDialog={setOpen}>
              <CreateForm
                id={id}
                onSubmit={onSubmit}
                handleUpdate={handleUpdate}
              />
            </Dialog>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Board;
