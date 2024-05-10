import { User } from "../../../hooks/http/http-users";
import { Table } from "../../../teststation/components/tables/Table";
import { TableProps } from "../../../types_and_interfaces/TableTypes";
import {
  TableColumnProps,
  TableRowProps,
} from "../../interfaces/UserTableTypes";

export const UserTable = ({ data }: TableProps) => {
  const columns = Object.keys(data[0] || {}).filter((key) => key !== "user_id");

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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const TableRow = ({ row, columns, rowIndex }: TableRowProps) => {
  return (
    <tr key={rowIndex} className="border-b border-gray-300">
      {columns.map((column, columnIndex) => (
        <td key={`${rowIndex}-${columnIndex}`} className="py-2 px-4 text-sm">
          <div>
            <p>{row[column as keyof User]?.toString()}</p>
          </div>
        </td>
      ))}
    </tr>
  );
};

export const TableColumn = ({
  row,
  column,
  columnIndex,
  rowIndex,
}: TableColumnProps) => {
  return (
    <td key={`${rowIndex}-${columnIndex}`} className="py-2 px-4 text-sm">
      <div>
        <p>{row[column as keyof User]?.toString()}</p>
      </div>
    </td>
  );
};
