import { User } from "../../../hooks/http/http-users";
import { TableProps } from "../../../types_and_interfaces/TableTypes";
export const Table = ({ data }: TableProps) => {
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
            <tr key={rowIndex} className="border-b border-gray-300">
              {columns.map((column, columnIndex) => (
                <td
                  key={`${rowIndex}-${columnIndex}`}
                  className="py-2 px-4 text-sm"
                >
                  <div>
                    <p>{row[column as keyof User]?.toString()}</p>
                  </div>
                </td>
              ))}
              <td> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
