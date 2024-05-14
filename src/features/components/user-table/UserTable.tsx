import { useEffect, useMemo } from "react";
import {
  User,
  useAddUser,
  useDeleteUser,
  useUsers,
} from "../../../hooks/http/http-users";
import { TableProps, TableRowProps } from "../../interfaces/UserTableTypes";

export const UserTable = ({ user }: TableProps) => {
  const data = useUsers();
  const { deleteUser } = useDeleteUser();
  const { addUser } = useAddUser();

  // don't render the id
  const columns = useMemo(() => {
    return Object.keys(data[0] || {}).filter((key) => key !== "user_id");
  }, [data]);

  // Add
  useEffect(() => {
    if (user) {
      console.log(user);
      addUser(user);
    }
  }, [user]);

  // Delete User
  const handleDelete = (user: User) => {
    console.log(`Lösche Benutzer mit ID ${user.user_id}`);
    if (user.user_id) {
      deleteUser(user.user_id);
    }
  };

  return (
    <div className="border border-neutral-400 rounded-md bg-slate-100 px-10 py-5">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-300">
            {columns.map((column) => (
              <th key={column} className="p-4">
                {column.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              row={row}
              columns={columns}
              rowIndex={rowIndex}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TableRow = ({
  row,
  columns,
  rowIndex,
  onDelete,
}: TableRowProps) => {
  return (
    <tr className="border-b border-gray-300">
      {columns.map((column, columnIndex) => (
        <td className="py-2 px-4 text-sm" key={`${rowIndex}-${columnIndex}`}>
          {row[column as keyof User]?.toString()}
        </td>
      ))}
      <td>
        <button
          onClick={() => {
            onDelete(row);
          }}
        >
          Löschen
        </button>
      </td>
    </tr>
  );
};
