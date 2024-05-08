import React from "react";

type TableData = {
  [key: string]: any;
};

type TableProps = {
  data: TableData[];
};

export const Table = ({ data }: TableProps) => {
  const columns = Object.keys(data[0] || {});
  return (
    <div className="border border-neutral-400 rounded-md bg-slate-100 px-10 py-5">
      <table className="w-full">
        <thead className="">
          <tr>
            {columns.map((column: any) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={`${rowIndex}-${columnIndex}`}>
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



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
