import { Tooltip } from "@mui/material";
import "./Widget.scss";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import Chat from "../Chat/Chat";
import { socket } from "../../Socket";

interface Widget {
  name?: string;
}

const Widget: React.FC<Widget> = () => {
  const [open, setOpen] = useState(false);
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);

  const clickHandler = () => {
    setOpen(!open);
    setIsConnected(!isConnected);
  };

  useEffect(() => {
    if (isConnected) {
      socket.connect();
    } else {
      socket.disconnect();
    }
    console.log(isConnected)
  }, [open]);
  return (
    <>
      {open && (
        <Chat isConnected={isConnected} setIsConnected={setIsConnected} />
      )}
      <Tooltip
        sx={{ fontSize: "2rem !important", bgcolor: "white" }}
        title="Базовая реализация websocket"
        placement="left"
        onClick={clickHandler}
      >
        <div className={`Widget ${open && "active"}`}>
          <AddIcon />
        </div>
      </Tooltip>
    </>
  );
};

export default Widget;
