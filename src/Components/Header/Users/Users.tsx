import { FC } from "react";

import "./Users.scss";
import useOutsideClick from "../../../hooks/useOutsideClick";
import UserList from "../../UserList/UserList";

interface UsersProps {}

const Users: FC<UsersProps> = () => {
  const { ref, isActive, setIsActive } =
    useOutsideClick<HTMLButtonElement>(false);

  const updateShowDropState = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="userFetch">
      <button ref={ref} onClick={updateShowDropState}>
        Запросить фейк пользователей с Api
      </button>
      {isActive && <UserList />}
    </div>
  );
};

export default Users;
