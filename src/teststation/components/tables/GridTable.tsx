import React from "react";
import { User } from "./Table";
import { useUsers } from "../../../hooks/http/http-users";

export const GridTable = () => {
  const users: User[] = useUsers();
  const columns = Object.keys(users[0] || {});

  console.log(Object.keys(users[0]));
  return (
    <div className={`grid grid-cols-${columns.length} gap-4`}>
      {/* Spaltenüberschriften */}
      {columns.map((column) => (
        <div key={column} className="font-bold">
          {column}
        </div>
      ))}
      {/* Datenzeilen */}
      {users.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {columns.map((column, columnIndex) => (
            <div key={`${rowIndex}-${columnIndex}`} className="border p-2">
              {row[column as keyof User]?.toString()}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
