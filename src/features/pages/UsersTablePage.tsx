import { useUsers } from "../../hooks/http/http-users";
import { UserTable } from "../components/user-table/UserTable";

const UsersTablePage = () => {
  const users = useUsers();
  return (
    <div className="w-full">
      <UserTable data={users} />
    </div>
  );
};

export default UsersTablePage;
