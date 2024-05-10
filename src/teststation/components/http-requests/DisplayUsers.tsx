import { useUsers } from "../../../hooks/http/http-users";
import { User } from "../../../types_and_interfaces/TableTypes";

import { Table } from "../tables/Table";

export const DisplayUsers = () => {
  const users = useUsers();
  console.log(users);

  return (
    <div>
      <div className="p-4 border border-gray rounded-lg">
        <ul>
          {users.map((user: User) => (
            <li key={user.user_id}>
              {user.firstname} {user.lastname} {user.age}
            </li>
          ))}
        </ul>
      </div>
      <br />

      <br />
      <Table data={users} />
    </div>
  );
};
