import { FC, useEffect, useState } from "react";

import "./UserList.scss";
import { User } from "../../Interfaces/User";

interface UserListProps {}

const UserList: FC<UserListProps> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");

        if (data.status !== 200) {
          throw Error;
        } else {
          setUsers(await data.json());
        }
      } catch (e) {
        setIsError(true);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="Users">
      {isLoading && <div>Загрузка</div>}
      {isError && <div>Произошла ошибка</div>}
      {users && (
        <ul>
            <span>Пользователи:</span>
          {users?.map((user: User) => {
            return (
              <li key={user.id}>
                {user.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default UserList;
