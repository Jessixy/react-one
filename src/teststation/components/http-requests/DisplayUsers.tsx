import { User, useUsers } from "../../../hooks/http/http-users";
import { GridTable } from "../tables/GridTable";

import { Table } from "../tables/Table";

export const DisplayUsers = () => {
  const users = useUsers();

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
      <Table data={users} />
      <br />
      <GridTable data={users} />
    </div>
  );
};
