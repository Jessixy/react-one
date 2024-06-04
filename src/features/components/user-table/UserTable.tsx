import { useMemo } from "react";
import { User } from "../../../hooks/http/http-users";

// Types and Interfaces

export type TableData = {
  [key: string]: User;
};

// export type TableProps = {
//   data: User[];
// };

export type TableRowProps = {
  row: User;
  columns: string[];
  rowIndex: number;
  onDelete: (row: User) => void;
  onUpdate: (row: User) => void;
};

export type TableColumnProps = {
  row: User;
  column: string;
};

export type UserTableProps = {
  users: User[];
  onDeleteUser: (user: User) => void;
  onUpdateUser: (user: User) => void;
};

// --------------------------------------------------------------------

export const UserTable = ({
  users,
  onDeleteUser,
  onUpdateUser,
}: UserTableProps) => {
  const columns = useMemo(() => {
    return Object.keys(users[0] || {}).filter((key) => key !== "user_id");
  }, [users]);

  const handleDelete = (user: User) => {
    if (user) {
      onDeleteUser(user);
    }
  };

  const handleUpdate = (user: User) => {
    if (user) {
      onUpdateUser(user);
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
          {users.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              row={row}
              columns={columns}
              rowIndex={rowIndex}
              onDelete={(row) => {
                handleDelete(row);
              }}
              onUpdate={(row) => {
                handleUpdate(row);
              }}
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
  onUpdate,
}: TableRowProps) => {
  return (
    <tr className="border-b border-gray-300">
      {columns.map((column, columnIndex) => (
        <td className="py-2 px-4 text-sm" key={`${rowIndex}-${columnIndex}`}>
          {row[column as keyof User]?.toString()}
        </td>
      ))}
      <td>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => {
              onDelete(row);
            }}
          >
            DELETE
          </button>
          <button
            onClick={() => {
              onUpdate(row);
            }}
          >
            EDIT
          </button>
        </div>
      </td>
    </tr>
  );
};
