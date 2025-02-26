import { FC, useEffect, useState } from "react";
import { socket } from '../../Socket.tsx';

import "./Chat.scss";
import { ConnectionState } from "./ConnectionState.tsx";
import { Events } from "./Events.tsx";
import { MyForm } from "./MyForm.tsx";

interface ChatProps {
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>,
  isConnected: boolean
}

const Chat: FC<ChatProps> = ({setIsConnected,isConnected}) => {

  
  const [fooEvents, setFooEvents] = useState<string[]>([]);

  useEffect(() => {
    function onConnect(): void {
      setIsConnected(true);
    }

    function onDisconnect(): void {
      setIsConnected(false);
    }

    function onFooEvent(value: string): void {
      setFooEvents((previous: string[]) => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onFooEvent);
    };
  }, []);

  console.log(fooEvents)
  
  return (
    <div className="Chat">
      <div className="Chat__title">Добро пожаловать!</div>
      <div className="Chat__description">Нужна помощь?</div>
      <div className="Chat__body">
        <ConnectionState isConnected={isConnected} />
        <Events events={fooEvents} />
        <MyForm events={fooEvents} />
      </div>
    </div>
  );
};

export default Chat;