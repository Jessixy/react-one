import { useUsers } from "../../../hooks/http/http-users";
import { Table } from "../../../teststation/components/tables/Table";

const UsersTablePage = () => {
  const users = useUsers();
  return (
    <div>
      <div>
        <Table data={users} />
      </div>
    </div>
  );
};

export default UsersTablePage;
