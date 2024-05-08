import React from "react";
import { useUserById, useUsers } from "../../../hooks/http/http-users";

type TableData = {
  [key: string]: User[];
};

type TableProps = {
  data: TableData[];
};

interface UserListProps {
  users: User[];
}

type User = {
  user_id: number;
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  role: string;
};

interface UserListProps {
  users: User[];
}

export const Table = ({ data }: TableProps) => {
  console.log(data);
  console.log(typeof data);

  const hello = () => {
    console.log("Hello");
  };

  const columns = Object.keys(data[0] || {});
  console.log(columns);
  return (
    <div className="border border-neutral-400 rounded-md bg-slate-100 px-10 py-5">
      <table className="w-full">
        <thead className="">
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={`${rowIndex}-${columnIndex}`}>
                  <div className="border-b border-gray-200">
                    <button onClick={hello} className="p-4">
                      {row[column]}
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Table als Grid
export const GridTable = ({ data }: TableProps) => {
  const columns = Object.keys(data[0] || {});
  console.log(Object.keys(data[0]));

  return (
    <div className={`grid grid-cols-${columns.length} gap-4`}>
      {/* Spaltenüberschriften */}
      {columns.map((column) => (
        <div key={column} className="font-bold">
          {column}
        </div>
      ))}

      {/* Datenzeilen */}
      {data.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {columns.map((column, columnIndex) => (
            <div key={`${rowIndex}-${columnIndex}`} className="border p-2">
              {row[column]}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
